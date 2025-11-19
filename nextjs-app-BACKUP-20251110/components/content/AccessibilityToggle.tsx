'use client';

import { useState, useEffect } from 'react';
import { Eye, Type, Contrast, Keyboard, RotateCcw, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  AccessibilitySettings,
  getAccessibilitySettings,
  saveAccessibilitySettings,
  resetAccessibilitySettings,
  applyAccessibilitySettings,
} from '@/lib/accessibility';

export default function AccessibilityToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(getAccessibilitySettings());

  useEffect(() => {
    // Apply settings on mount
    applyAccessibilitySettings(settings);
  }, []);

  const updateSettings = (updates: Partial<AccessibilitySettings>) => {
    const newSettings = { ...settings, ...updates };
    setSettings(newSettings);
    saveAccessibilitySettings(newSettings);
    applyAccessibilitySettings(newSettings);
  };

  const handleReset = () => {
    const defaultSettings = resetAccessibilitySettings();
    setSettings(defaultSettings);
    applyAccessibilitySettings(defaultSettings);
  };

  const handleFontSizeChange = (size: 100 | 125 | 150) => {
    updateSettings({ fontSize: size });
  };

  return (
    <>
      {/* Fixed Position Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:scale-110 focus:outline-none focus:ring-4 focus:ring-ring"
        aria-label="Accessibility Options"
        data-testid="button-accessibility-toggle"
      >
        <Eye className="w-6 h-6 mx-auto" />
      </button>

      {/* Settings Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <Card className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] shadow-2xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div>
                <CardTitle className="text-xl">Accessibility Options</CardTitle>
                <CardDescription>Customize your viewing experience</CardDescription>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                aria-label="Close accessibility options"
                data-testid="button-close-accessibility"
              >
                <X className="w-5 h-5" />
              </Button>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Font Size Control */}
              <div className="space-y-3">
                <Label className="flex items-center gap-2 text-base font-semibold">
                  <Type className="w-5 h-5" />
                  Font Size
                </Label>
                <div className="flex gap-2">
                  <Button
                    variant={settings.fontSize === 100 ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleFontSizeChange(100)}
                    className="flex-1"
                    data-testid="button-font-size-100"
                  >
                    Normal
                  </Button>
                  <Button
                    variant={settings.fontSize === 125 ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleFontSizeChange(125)}
                    className="flex-1"
                    data-testid="button-font-size-125"
                  >
                    125%
                  </Button>
                  <Button
                    variant={settings.fontSize === 150 ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleFontSizeChange(150)}
                    className="flex-1"
                    data-testid="button-font-size-150"
                  >
                    150%
                  </Button>
                </div>
              </div>

              {/* High Contrast Toggle */}
              <div className="space-y-3">
                <Label className="flex items-center gap-2 text-base font-semibold">
                  <Contrast className="w-5 h-5" />
                  High Contrast Mode
                </Label>
                <Button
                  variant={settings.highContrast ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => updateSettings({ highContrast: !settings.highContrast })}
                  className="w-full"
                  data-testid="button-high-contrast"
                  aria-pressed={settings.highContrast}
                >
                  {settings.highContrast ? 'Enabled' : 'Disabled'}
                </Button>
                <p className="text-sm text-muted-foreground">
                  Increases color contrast and adds enhanced borders
                </p>
              </div>

              {/* Dyslexia-Friendly Font */}
              <div className="space-y-3">
                <Label className="flex items-center gap-2 text-base font-semibold">
                  <Type className="w-5 h-5" />
                  Readable Font
                </Label>
                <Button
                  variant={settings.dyslexiaFont ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => updateSettings({ dyslexiaFont: !settings.dyslexiaFont })}
                  className="w-full"
                  data-testid="button-dyslexia-font"
                  aria-pressed={settings.dyslexiaFont}
                >
                  {settings.dyslexiaFont ? 'Enabled' : 'Disabled'}
                </Button>
                <p className="text-sm text-muted-foreground">
                  Uses Arial font with increased spacing for easier reading
                </p>
              </div>

              {/* Keyboard Navigation Mode */}
              <div className="space-y-3">
                <Label className="flex items-center gap-2 text-base font-semibold">
                  <Keyboard className="w-5 h-5" />
                  Enhanced Keyboard Focus
                </Label>
                <Button
                  variant={settings.keyboardNav ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => updateSettings({ keyboardNav: !settings.keyboardNav })}
                  className="w-full"
                  data-testid="button-keyboard-nav"
                  aria-pressed={settings.keyboardNav}
                >
                  {settings.keyboardNav ? 'Enabled' : 'Disabled'}
                </Button>
                <p className="text-sm text-muted-foreground">
                  Shows enhanced focus indicators when navigating with keyboard
                </p>
              </div>

              {/* Reset Button */}
              <div className="pt-4 border-t">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleReset}
                  className="w-full"
                  data-testid="button-reset-accessibility"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset All Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </>
  );
}
