<template>
  <slot />
</template>

<script setup lang="ts">
import { set } from 'lodash-es';
import { onBeforeUnmount, onMounted, provide, ref, toRefs } from 'vue';

import {
  type Theme,
  type ThemeProviderProps,
  ThemeProviderSymbol,
  composeDesignSystem,
  composeThemeProvider,
} from '../../lib';

const props = defineProps<{
  theme: Theme;
}>();

const { theme } = toRefs(props);

const themeProvider = composeThemeProvider();

const styleElRef = ref<HTMLStyleElement | null>(null);

const cssVariablesMap = ref<Record<string, unknown>>(
  composeDesignSystem(theme.value).cssVariables,
);

function handleVariablesMap(cssVariablesPayload: Record<string, unknown>) {
  styleElRef.value = themeProvider.handleVariablesMap(
    styleElRef.value,
    cssVariablesPayload,
  );
}

function toggleLightDarkTheme() {
  themeProvider.handleToggleLightDarkTheme();
}

function setThemeVariable(variableName: string, variableValue: string) {
  const payload = themeProvider.handleSetThemeVariable({
    variableName,
    variableValue,
  });
  if (payload) {
    set(cssVariablesMap.value, [payload.variableName], payload.variableValue);
    handleVariablesMap(cssVariablesMap.value);
  }
}

const providerValue: ThemeProviderProps = {
  setTheme: handleVariablesMap,
  setThemeVariable,
  toggleLightDarkTheme,
};

provide(ThemeProviderSymbol, providerValue);

onMounted(() => {
  handleVariablesMap(cssVariablesMap?.value);
});

onBeforeUnmount(() => {
  styleElRef.value?.remove();
  styleElRef.value = null;
});
</script>
