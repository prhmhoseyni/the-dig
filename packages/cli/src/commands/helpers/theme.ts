export const GLOBALS_CSS_CONTENT = `
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

:root {
  color-scheme: light;

  /** :::: generic variables: You can customize theme :::: */
  --dig-background-primary: #f5f5f5;
  --dig-background-secondary: #ffffff;
  --dig-background-dialog: #ffffff;
  --dig-background-inverse: #000000;

  --dig-prose-primary: #0c0e10;
  --dig-prose-secondary: #667585;
  --dig-prose-hint: #9aa6b1;
  --dig-prose-inverse: #f6f7f8;
  --dig-prose-link: #209cd7;

  --dig-brand: #3e88c1;
  --dig-info: #2d90d2;
  --dig-success: #159754;
  --dig-warning: #d07c06;
  --dig-danger: #c53211;
  --dig-gray: #272937;

  /** :::: design tokens: Please don't change design tokens :::: */
  --dig-color-mix-hover: #000000 10%;
  --dig-color-mix-active: #000000 15%;

  --dig-color-mix-light: #FFFFFF 90%;
  --dig-color-mix-light-hover: #FFFFFF 85%;
  --dig-color-mix-light-active: #FFFFFF 80%;

  --dig-color-mix-gray: #FFFFFF;
}

html.dark {
  color-scheme: dark;

  /** :::: generic variables: You can customize theme :::: */
  --dig-background-primary: #121212;
  --dig-background-secondary: #1f1f1f;
  --dig-background-dialog: #2d2d2d;
  --dig-background-inverse: #ffffff;

  --dig-prose-primary: #f5f5f5;
  --dig-prose-secondary: #b3b3b3;
  --dig-prose-hint: #6d6d6d;
  --dig-prose-inverse: #282828;
  --dig-prose-link: #2d90d2;

  --dig-brand: #3e88c1;
  --dig-info: #2d90d2;
  --dig-success: #159754;
  --dig-warning: #d07c06;
  --dig-danger: #c53211;
  --dig-gray: #f4f4f4;

  /** :::: design tokens: Please don't change design tokens :::: */
  --dig-color-mix-hover: #ffffff 10%;
  --dig-color-mix-active: #ffffff 15%;

  --dig-color-mix-light: #000000 90%;
  --dig-color-mix-light-hover: #000000 85%;
  --dig-color-mix-light-active: #000000 80%;

  --dig-color-mix-gray: #000000;
}

@theme {
  /** :::: colors :::: */
  --color-background-primary: var(--dig-background-primary);
  --color-background-secondary: var(--dig-background-secondary);
  --color-background-dialog: var(--dig-background-dialog);
  --color-background-inverse: var(--dig-background-inverse);

  --color-prose-primary: var(--dig-prose-primary);
  --color-prose-secondary: var(--dig-prose-secondary);
  --color-prose-hint: var(--dig-prose-hint);
  --color-prose-inverse: var(--dig-prose-inverse);
  --color-prose-link: var(--dig-prose-link);

  --color-brand: var(--dig-brand);
  --color-brand-hover: color-mix(in srgb, var(--dig-brand), var(--dig-color-mix-hover));
  --color-brand-active: color-mix(in srgb, var(--dig-brand), var(--dig-color-mix-active));
  --color-brand-light: color-mix(in srgb, var(--dig-brand), var(--dig-color-mix-light));
  --color-brand-light-hover: color-mix(in srgb, var(--dig-brand), var(--dig-color-mix-light-hover));
  --color-brand-light-active: color-mix(in srgb, var(--dig-brand), var(--dig-color-mix-light-active));

  --color-info: var(--dig-info);
  --color-info-hover: color-mix(in srgb, var(--dig-info), var(--dig-color-mix-hover));
  --color-info-active: color-mix(in srgb, var(--dig-info), var(--dig-color-mix-active));
  --color-info-light: color-mix(in srgb, var(--dig-info), var(--dig-color-mix-light));
  --color-info-light-light: color-mix(in srgb, var(--dig-info), var(--dig-color-mix-light-hover));
  --color-info-light-active: color-mix(in srgb, var(--dig-info), var(--dig-color-mix-light-active));

  --color-success: var(--dig-success);
  --color-success-hover: color-mix(in srgb, var(--dig-success), var(--dig-color-mix-hover));
  --color-success-active: color-mix(in srgb, var(--dig-success), var(--dig-color-mix-active));
  --color-success-light: color-mix(in srgb, var(--dig-success), var(--dig-color-mix-light));
  --color-success-light-hover: color-mix(in srgb, var(--dig-success), var(--dig-color-mix-light-hover));
  --color-success-light-active: color-mix(in srgb, var(--dig-success), var(--dig-color-mix-light-active));

  --color-warning: var(--dig-warning);
  --color-warning-hover: color-mix(in srgb, var(--dig-warning), var(--dig-color-mix-hover));
  --color-warning-active: color-mix(in srgb, var(--dig-warning), var(--dig-color-mix-active));
  --color-warning-light: color-mix(in srgb, var(--dig-warning), var(--dig-color-mix-light));
  --color-warning-light-hover: color-mix(in srgb, var(--dig-warning), var(--dig-color-mix-light-hover));
  --color-warning-light-active: color-mix(in srgb, var(--dig-warning), var(--dig-color-mix-light-active));

  --color-danger: var(--dig-danger);
  --color-danger-hover: color-mix(in srgb, var(--dig-danger), var(--dig-color-mix-hover));
  --color-danger-active: color-mix(in srgb, var(--dig-danger), var(--dig-color-mix-active));
  --color-danger-light: color-mix(in srgb, var(--dig-danger), var(--dig-color-mix-light));
  --color-danger-light-hover: color-mix(in srgb, var(--dig-danger), var(--dig-color-mix-light-hover));
  --color-danger-light-active: color-mix(in srgb, var(--dig-danger), var(--dig-color-mix-light-active));

  --color-gray: var(--dig-gray);
  --color-gray-hover: color-mix(in srgb, var(--dig-gray), var(--dig-color-mix-hover));
  --color-gray-active: color-mix(in srgb, var(--dig-gray), var(--dig-color-mix-active));
  --color-gray-light: color-mix(in srgb, var(--dig-gray), var(--dig-color-mix-light));
  --color-gray-light-hover: color-mix(in srgb, var(--dig-gray), var(--dig-color-mix-light-hover));
  --color-gray-light-active: color-mix(in srgb, var(--dig-gray), var(--dig-color-mix-light-active));

  --color-white: rgba(255, 255, 255, 1);
  --color-white-80: rgba(255, 255, 255, 80%);
  --color-white-48: rgba(255, 255, 255, 48%);
  --color-white-32: rgba(255, 255, 255, 32%);
  --color-white-24: rgba(255, 255, 255, 24%);
  --color-white-16: rgba(255, 255, 255, 16%);
  --color-white-12: rgba(255, 255, 255, 12%);
  --color-white-8: rgba(255, 255, 255, 08%);

  --color-black: rgba(0, 0, 0, 1);
  --color-black-80: rgba(0, 0, 0, 80%);
  --color-black-48: rgba(0, 0, 0, 48%);
  --color-black-32: rgba(0, 0, 0, 32%);
  --color-black-24: rgba(0, 0, 0, 24%);
  --color-black-16: rgba(0, 0, 0, 16%);
  --color-black-12: rgba(0, 0, 0, 12%);
  --color-black-8: rgba(0, 0, 0, 08%);

  /** :::: typography :::: */
  --text-heading1: 2.25rem;
  --text-heading1--line-height: 3.375rem;
  --text-heading1--font-weight: 700;

  --text-heading2: 2rem;
  --text-heading2--line-height: 3rem;
  --text-heading2--font-weight: 700;

  --text-heading3: 1.5rem;
  --text-heading3--line-height: 2.25rem;
  --text-heading3--font-weight: 700;

  --text-heading4: 1.125rem;
  --text-heading4--line-height: 1.75rem;
  --text-heading4--font-weight: 700;

  --text-heading5: 1rem;
  --text-heading5--line-height: 1.5rem;
  --text-heading5--font-weight: 700;

  --text-subtitle1: 1.125rem;
  --text-subtitle1--line-height: 1.6875rem;
  --text-subtitle1--font-weight: 500;

  --text-subtitle2: 1rem;
  --text-subtitle2--line-height: 1.5rem;
  --text-subtitle2--font-weight: 500;

  --text-subtitle3: 0.875rem;
  --text-subtitle3--line-height: 1.3125rem;
  --text-subtitle3--font-weight: 500;

  --text-subtitle4: 0.8125rem;
  --text-subtitle4--line-height: 1.21875rem;
  --text-subtitle4--font-weight: 500;

  --text-subtitle5: 0.75rem;
  --text-subtitle5--line-height: 1.125rem;
  --text-subtitle5--font-weight: 500;

  --text-subtitle6: 0.625rem;
  --text-subtitle6--line-height: 0.9375rem;
  --text-subtitle6--font-weight: 500;

  --text-paragraph1: 1.125rem;
  --text-paragraph1--line-height: 2rem;
  --text-paragraph1--font-weight: 400;

  --text-paragraph2: 1rem;
  --text-paragraph2--line-height: 1.75rem;
  --text-paragraph2--font-weight: 400;

  --text-paragraph3: 0.875rem;
  --text-paragraph3--line-height: 1.5rem;
  --text-paragraph3--font-weight: 400;

  --text-paragraph4: 0.8125rem;
  --text-paragraph4--line-height: 1.375rem;
  --text-paragraph4--font-weight: 400;

  --text-paragraph5: 0.75rem;
  --text-paragraph5--line-height: 1.25rem;
  --text-paragraph5--font-weight: 400;

  --text-label1: 1rem;
  --text-label1--line-height: 1.4rem;
  --text-label1--font-weight: 400;

  --text-label2: 0.875rem;
  --text-label2--line-height: 1.225rem;
  --text-label2--font-weight: 400;

  --text-label3: 0.8125rem;
  --text-label3--line-height: 1.1375rem;
  --text-label3--font-weight: 400;

  --text-label4: 0.75rem;
  --text-label4--line-height: 1.05rem;
  --text-label4--font-weight: 400;

  --text-caption1: 0.75rem;
  --text-caption1--line-height: 1.25rem;
  --text-caption1--font-weight: 400;

  --text-caption2: 0.6875rem;
  --text-caption2--line-height: 1.125rem;
  --text-caption2--font-weight: 400;

  /** :::: shadows :::: */
  --shadow-xs: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  --shadow-sm: 0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10);
  --shadow-md: 0px 2px 4px 0px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10);
  --shadow-lg: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);
  --shadow-xl: 0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08);
  --shadow-2xl: 0px 24px 48px -12px rgba(16, 24, 40, 0.18);
  --shadow-3xl: 0px 32px 64px -12px rgba(16, 24, 40, 0.14);

  --shadow-card-sm: 0px 1px 2px 0px rgba(145, 158, 171, 0.16);
  --shadow-card-md: 0px 2px 5px 0px rgba(145, 158, 171, 0.16);
  --shadow-card-lg: 0px 4px 8px 0px rgba(145, 158, 171, 0.16);
  
  --shadow-btn-brand: 0px 10px 20px 0px rgba(72, 164, 234, 0.14);
  --shadow-btn-info: 0px 10px 20px 0px rgba(25, 145, 255, 0.14);
  --shadow-btn-success: 0px 10px 20px 0px rgba(67, 168, 36, 0.14);
  --shadow-btn-warning: 0px 10px 20px 0px rgba(255, 149, 0, 0.14);
  --shadow-btn-danger: 0px 10px 20px 0px rgba(241, 56, 14, 0.14);
  
  --shadow-focus-brand: 0px 0px 0px 1px #FFF, 0px 0px 0px 4px rgba(72, 164, 234, 0.14);
  --shadow-focus-info: 0px 0px 0px 1px #FFF, 0px 0px 0px 4px rgba(25, 145, 255, 0.14);
  --shadow-focus-success: 0px 0px 0px 1px #FFF, 0px 0px 0px 4px rgba(67, 168, 36, 0.14);
  --shadow-focus-warning: 0px 0px 0px 1px #FFF, 0px 0px 0px 4px rgba(255, 149, 0, 0.14);
  --shadow-focus-danger: 0px 0px 0px 1px #FFF, 0px 0px 0px 4px rgba(241, 56, 14, 0.14);
  --shadow-focus-gray: 0px 0px 0px 1px #FFF, 0px 0px 0px 4px rgba(39, 41, 55, 0.06);
  
  --shadow-dialog: 0px 20px 24px -4px rgba(16, 24, 40, 0.10), 0px 8px 8px -4px rgba(16, 24, 40, 0.04);
  --shadow-menu: 0px 4px 8px 0px rgba(39, 41, 55, 0.08);
  --shadow-control: 0px 1px 0.5px 0.05px rgba(24, 24, 27, 0.05), 0px -4px 8px 0px rgba(0, 0, 0, 0.02);
  --shadow-alert: 0px 2px 7px 0px rgba(0, 0, 0, 0.15), 0px 5px 17px 0px rgba(0, 0, 0, 0.20);
}
`;
