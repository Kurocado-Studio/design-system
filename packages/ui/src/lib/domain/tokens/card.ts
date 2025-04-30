export const cardVariantToken: CardVariantToken = {
  bg: 'bg-card-default-bg',
  fg: 'text-card-default-fg',
  radius: 'rounded-card-default-radius',
  padding: 'p-card-default-padding',
  paddingBody: 'p-card-default-paddingBody',
  paddingHeader: 'p-card-default-paddingHeader',
  paddingFooter: 'p-card-default-paddingFooter',
};

export interface CardVariantToken {
  bg: string;
  fg: string;
  radius: string;
  padding: string;
  paddingBody: string;
  paddingHeader: string;
  paddingFooter: string;
}

export interface CardProps {
  className?: string;
}
