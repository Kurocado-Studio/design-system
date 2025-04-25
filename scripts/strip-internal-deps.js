import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const packages = ['ui', 'ui-vue'];
const internalDepsToStrip = ['@internal/domain'];
const DEPENDENCY_TYPES = [
  'dependencies',
  'peerDependencies',
  'optionalDependencies',
];

// For __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function processDependencies(pkgData, depType, pkgName) {
  let isModified = false;

  if (pkgData[depType]) {
    internalDepsToStrip.forEach((internalDep) => {
      if (pkgData[depType][internalDep]?.startsWith('workspace:')) {
        console.log(`Removing ${internalDep} from ${depType} in ${pkgName}`);
        delete pkgData[depType][internalDep];
        isModified = true;
      }
    });
  }

  return isModified;
}

for (const pkgName of packages) {
  const pkgPath = path.resolve(
    __dirname,
    `../packages/${pkgName}/package.json`,
  );
  const raw = await readFile(pkgPath, 'utf8');
  const pkgData = JSON.parse(raw);
  let modified = false;

  for (const depType of DEPENDENCY_TYPES) {
    modified = processDependencies(pkgData, depType, pkgName) || modified;
  }

  if (modified) {
    await writeFile(pkgPath, JSON.stringify(pkgData, null, 2), 'utf8');
    console.log(`✅ Updated ${pkgName}/package.json`);
  } else {
    console.log(`ℹ️ No changes needed in ${pkgName}/package.json`);
  }
}
