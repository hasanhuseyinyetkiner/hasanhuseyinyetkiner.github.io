import { describe, expect, it } from 'vitest';
import { selectHeroImage, selectHeroImageSet } from '../components/Hero';
import { Theme } from '../contexts/ThemeContext';

describe('selectHeroImage', () => {
  it('returns dark image for dark theme', () => {
    const darkTheme: Theme = 'dark';
    const selected = selectHeroImage(darkTheme);
    expect(selected).toBe('/hero/dark-1024.webp');
  });

  it('returns light image for light theme', () => {
    const lightTheme: Theme = 'light';
    const selected = selectHeroImage(lightTheme);
    expect(selected).toBe('/hero/light-1024.webp');
  });

  it('keeps each responsive set scoped to the active theme', () => {
    expect(selectHeroImageSet('dark')).toContain('/hero/dark-640.webp');
    expect(selectHeroImageSet('dark')).not.toContain('/hero/light-640.webp');
    expect(selectHeroImageSet('light')).toContain('/hero/light-640.webp');
    expect(selectHeroImageSet('light')).not.toContain('/hero/dark-640.webp');
  });
});

// ### Module-Summary
// selectHeroImage fonksiyonunun koyu ve açık temalar için doğru görsel
// yollarını döndürdüğünü doğrulayan basit ünite testi sunar.
// REQUIRES: vitest

