export interface AccessibilitySettings {
  fontSize: 100 | 125 | 150;
  highContrast: boolean;
  dyslexiaFont: boolean;
  keyboardNav: boolean;
}

const ACCESSIBILITY_STORAGE_KEY = 'id-accessibility-settings';

const defaultSettings: AccessibilitySettings = {
  fontSize: 100,
  highContrast: false,
  dyslexiaFont: false,
  keyboardNav: false,
};

export function getAccessibilitySettings(): AccessibilitySettings {
  try {
    const stored = localStorage.getItem(ACCESSIBILITY_STORAGE_KEY);
    if (stored) {
      return { ...defaultSettings, ...JSON.parse(stored) };
    }
  } catch (error) {
    console.error('Failed to load accessibility settings:', error);
  }
  return defaultSettings;
}

export function saveAccessibilitySettings(settings: AccessibilitySettings): void {
  try {
    localStorage.setItem(ACCESSIBILITY_STORAGE_KEY, JSON.stringify(settings));
  } catch (error) {
    console.error('Failed to save accessibility settings:', error);
  }
}

export function resetAccessibilitySettings(): AccessibilitySettings {
  try {
    localStorage.removeItem(ACCESSIBILITY_STORAGE_KEY);
  } catch (error) {
    console.error('Failed to reset accessibility settings:', error);
  }
  return defaultSettings;
}

export function applyAccessibilitySettings(settings: AccessibilitySettings): void {
  const root = document.documentElement;
  
  // Apply font size
  if (settings.fontSize === 125) {
    root.classList.add('font-size-125');
    root.classList.remove('font-size-150');
  } else if (settings.fontSize === 150) {
    root.classList.add('font-size-150');
    root.classList.remove('font-size-125');
  } else {
    root.classList.remove('font-size-125', 'font-size-150');
  }
  
  // Apply high contrast
  if (settings.highContrast) {
    root.classList.add('high-contrast');
  } else {
    root.classList.remove('high-contrast');
  }
  
  // Apply dyslexia-friendly font
  if (settings.dyslexiaFont) {
    root.classList.add('dyslexia-font');
  } else {
    root.classList.remove('dyslexia-font');
  }
  
  // Apply keyboard navigation mode
  if (settings.keyboardNav) {
    root.classList.add('keyboard-nav-mode');
  } else {
    root.classList.remove('keyboard-nav-mode');
  }
}
