import 'styled-components';
import type { AppTheme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: AppTheme['mode'];
    colors: AppTheme['colors'];
    spacing: AppTheme['spacing'];
    radius: AppTheme['radius'];
    shadows: AppTheme['shadows'];
    breakpoints: AppTheme['breakpoints'];
    fonts: AppTheme['fonts'];
  }
}
