import { describe, expect, it } from 'vitest';
import { selectHeroImage } from '../components/Hero';
import { Theme } from '../contexts/ThemeContext';

describe('selectHeroImage', () => {
  it('returns dark image for dark theme', () => {
    const darkTheme: Theme = 'dark';
    const selected = selectHeroImage(darkTheme);
    expect(selected).toBe('/dark.png');
  });

  it('returns light image for light theme', () => {
    const lightTheme: Theme = 'light';
    const selected = selectHeroImage(lightTheme);
    expect(selected).toBe('/white.png');
  });
});

// ### Module-Summary
// selectHeroImage fonksiyonunun koyu ve açık temalar için doğru görsel
// yollarını döndürdüğünü doğrulayan basit ünite testi sunar.
// REQUIRES: vitest

