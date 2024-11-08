// Accessibility.tsx
"use client";
import React, { useEffect, useState } from 'react';
import AccessibilityIcon from './AccessibilityIcon'; // Adjust the path as needed

// Define the shape of accessibility settings
interface AccessibilitySettings {
  highlightLinks: boolean;
  colorShift: boolean;
  animationsEnabled: boolean;
  highContrast: boolean;
  focusEnabled: boolean;
  cursorEnabled: boolean;
  textSize: '1em' | '1.25em';
  spacing: 'normal' | 'wide';
  font: 'sans-serif' | 'serif';
  imagesVisible: boolean;
  showPageStructure: boolean;
  guideEnabled: boolean;
}

const Accessibility: React.FC = () => {
  const defaultSettings: AccessibilitySettings = {
    highlightLinks: false,
    colorShift: false,
    animationsEnabled: true,
    highContrast: false,
    focusEnabled: false,
    cursorEnabled: false,
    textSize: '1em',
    spacing: 'normal',
    font: 'sans-serif',
    imagesVisible: true,
    showPageStructure: false,
    guideEnabled: false,
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [isRemoved, setIsRemoved] = useState<boolean>(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibilitySettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  // Save settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
  }, [settings]);

  // Apply accessibility settings
  useEffect(() => {
    // Highlight Links
    document.querySelectorAll('a').forEach((link) => {
      const element = link as HTMLElement;
      element.style.backgroundColor = settings.highlightLinks ? '#FFFF00' : '';
    });

    // Text Size
    document.documentElement.style.fontSize = settings.textSize;

    // High Contrast and Color Shift
    let filter = '';
    if (settings.highContrast) filter += ' contrast(2)';
    if (settings.colorShift) filter += ' invert(1)';
    document.documentElement.style.filter = filter.trim() || 'none';

    // Letter Spacing
    document.documentElement.style.letterSpacing = settings.spacing === 'wide' ? '0.1em' : 'normal';

    // Font Family
    document.documentElement.style.fontFamily = settings.font;

    // Animations
    document.documentElement.style.animation = settings.animationsEnabled ? '' : 'none';

    // Focus Outline
    document.querySelectorAll('*').forEach((element) => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.outline = settings.focusEnabled ? '2px solid #0000FF' : '';
    });

    // Cursor
    document.body.style.cursor = settings.cursorEnabled ? 'pointer' : '';

    // Images Visibility
    document.querySelectorAll('img').forEach((img) => {
      const htmlImg = img as HTMLElement;
      htmlImg.style.display = settings.imagesVisible ? 'block' : 'none';
    });

    // Guide (Reading Line)
    const guideId = 'reading-guide-line';
    let guideLine = document.getElementById(guideId) as HTMLElement | null;

    if (settings.guideEnabled) {
      if (!guideLine) {
        guideLine = document.createElement('div');
        guideLine.id = guideId;
        guideLine.style.position = 'fixed';
        guideLine.style.top = '50%';
        guideLine.style.left = '0';
        guideLine.style.width = '100%';
        guideLine.style.height = '2px';
        guideLine.style.backgroundColor = 'red';
        guideLine.style.zIndex = '1000';
        guideLine.style.pointerEvents = 'none';
        document.body.appendChild(guideLine);
      }
    } else {
      if (guideLine) {
        guideLine.remove();
      }
    }
  }, [settings]);

  const togglePageStructure = () => {
    setSettings((prev) => ({ ...prev, showPageStructure: !prev.showPageStructure }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  const handleSettingChange = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const renderPageStructure = () => {
    const landmarks = Array.from(
      document.querySelectorAll<HTMLElement>('header, nav, main, footer')
    );
    const headings = Array.from(document.querySelectorAll<HTMLElement>('h1, h2, h3, h4, h5, h6'));
    const links = Array.from(document.querySelectorAll<HTMLElement>('a'));

    return (
      <div className="text-left">
        {landmarks.length > 0 && (
          <>
            <h3 className="font-semibold text-gray-800">Landmarks</h3>
            <ul className="list-disc pl-5">
              {landmarks.map((element, index) => (
                <li key={index} className="text-sm text-gray-700">
                  {element.tagName.toLowerCase()} (id: {element.id || 'N/A'})
                </li>
              ))}
            </ul>
          </>
        )}
        {headings.length > 0 && (
          <>
            <h3 className="font-semibold text-gray-800 mt-4">Headings</h3>
            <ul className="list-disc pl-5">
              {headings.map((element, index) => (
                <li key={index} className="text-sm text-gray-700">
                  {element.tagName.toLowerCase()}:{' '}
                  {element.textContent ? element.textContent.trim() : 'N/A'}
                </li>
              ))}
            </ul>
          </>
        )}
        {links.length > 0 && (
          <>
            <h3 className="font-semibold text-gray-800 mt-4">Links</h3>
            <ul className="list-disc pl-5">
              {links.map((element, index) => (
                <li key={index} className="text-sm text-gray-700">
                  {element.getAttribute('href') || 'N/A'}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  };

  if (isRemoved) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-4 z-50 transition-transform transform ${
        isHidden ? 'translate-x-full right-0' : 'right-4'
      }`}
    >
      {isHidden ? (
        <button
          onClick={() => setIsHidden(false)}
          className="p-2 bg-blue-600 text-white rounded-l-full flex items-center justify-center fixed top-1/2 right-0 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Show Accessibility Widget"
        >
          Show Widget
        </button>
      ) : (
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Toggle Accessibility Widget"
          >
            <AccessibilityIcon />
          </button>
          {isOpen && (
            <div
              className="bg-white shadow-lg rounded-lg p-4 mt-2 w-80 max-h-[80vh] overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="accessibility-options"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 id="accessibility-options" className="text-lg font-semibold text-blue-600">
                  Accessibility Options
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded"
                    aria-label="Close Accessibility Widget"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => setIsHidden(true)}
                    className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded"
                    aria-label="Hide Accessibility Widget"
                  >
                    Hide
                  </button>
                  <button
                    onClick={() => setIsRemoved(true)}
                    className="text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-400 rounded"
                    aria-label="Remove Accessibility Widget"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* Focus Toggle */}
                <button
                  className={`p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    settings.focusEnabled ? 'bg-blue-200' : 'bg-gray-200'
                  }`}
                  onClick={() => handleSettingChange('focusEnabled', !settings.focusEnabled)}
                  aria-pressed={settings.focusEnabled}
                >
                  {settings.focusEnabled ? 'Unfocus' : 'Focus'}
                </button>
                {/* Cursor Toggle */}
                <button
                  className={`p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    settings.cursorEnabled ? 'bg-blue-200' : 'bg-gray-200'
                  }`}
                  onClick={() => handleSettingChange('cursorEnabled', !settings.cursorEnabled)}
                  aria-pressed={settings.cursorEnabled}
                >
                  {settings.cursorEnabled ? 'Normal Cursor' : 'Bigger Cursor'}
                </button>
                {/* Highlight Links */}
                <button
                  className={`p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    settings.highlightLinks ? 'bg-blue-200' : 'bg-gray-200'
                  }`}
                  onClick={() => handleSettingChange('highlightLinks', !settings.highlightLinks)}
                  aria-pressed={settings.highlightLinks}
                >
                  {settings.highlightLinks ? 'Remove Highlight' : 'Highlight Links'}
                </button>
                {/* High Contrast */}
                <button
                  className={`p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    settings.highContrast ? 'bg-blue-200' : 'bg-gray-200'
                  }`}
                  onClick={() => handleSettingChange('highContrast', !settings.highContrast)}
                  aria-pressed={settings.highContrast}
                >
                  {settings.highContrast ? 'Normal Contrast' : 'Contrast'}
                </button>
                {/* Color Shift */}
                <button
                  className={`p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    settings.colorShift ? 'bg-blue-200' : 'bg-gray-200'
                  }`}
                  onClick={() => handleSettingChange('colorShift', !settings.colorShift)}
                  aria-pressed={settings.colorShift}
                >
                  {settings.colorShift ? 'Normal Colors' : 'Invert Colors'}
                </button>
                {/* Animations Toggle */}
                <button
                  className={`p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    settings.animationsEnabled ? 'bg-blue-200' : 'bg-gray-200'
                  }`}
                  onClick={() => handleSettingChange('animationsEnabled', !settings.animationsEnabled)}
                  aria-pressed={!settings.animationsEnabled}
                >
                  {settings.animationsEnabled ? 'Disable Animation' : 'Enable Animation'}
                </button>
                {/* Text Size */}
                <button
                  className={`p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    settings.textSize === '1.25em' ? 'bg-blue-200' : 'bg-gray-200'
                  }`}
                  onClick={() => handleSettingChange('textSize', '1.25em')}
                  aria-pressed={settings.textSize === '1.25em'}
                >
                  Bigger Text
                </button>
                <button
                  className={`p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    settings.textSize === '1em' ? 'bg-blue-200' : 'bg-gray-200'
                  }`}
                  onClick={() => handleSettingChange('textSize', '1em')}
                  aria-pressed={settings.textSize === '1em'}
                >
                  Normal Text
                </button>
                {/* Font Family */}
                <button
                  className={`p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    settings.font === 'serif' ? 'bg-blue-200' : 'bg-gray-200'
                  }`}
                  onClick={() => handleSettingChange('font', 'serif')}
                  aria-pressed={settings.font === 'serif'}
                >
                  Serif Fonts
                </button>
                {/* Images Visibility */}
                <button
                  className={`p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    settings.imagesVisible ? 'bg-gray-200' : 'bg-blue-200'
                  }`}
                  onClick={() => handleSettingChange('imagesVisible', !settings.imagesVisible)}
                  aria-pressed={settings.imagesVisible}
                >
                  {settings.imagesVisible ? 'Hide Images' : 'Show Images'}
                </button>
                {/* Reading Line (Guide) */}
                <button
                  className={`p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    settings.guideEnabled ? 'bg-blue-200' : 'bg-gray-200'
                  }`}
                  onClick={() => handleSettingChange('guideEnabled', !settings.guideEnabled)}
                  aria-pressed={settings.guideEnabled}
                >
                  {settings.guideEnabled ? 'Disable Reading Line' : 'Enable Reading Line'}
                </button>
                {/* Tooltips (Page Structure) */}
                <button
                  className={`p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    settings.showPageStructure ? 'bg-blue-200' : 'bg-gray-200'
                  }`}
                  onClick={togglePageStructure}
                  aria-pressed={settings.showPageStructure}
                >
                  {settings.showPageStructure ? 'Hide Tooltips' : 'Show Tooltips'}
                </button>
                {/* Reset Button */}
                <button
                  className="p-2 col-span-2 bg-red-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                  onClick={resetSettings}
                >
                  Reset to Default
                </button>
              </div>
            </div>
          )}
        </>
      )}
      {settings.showPageStructure && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="page-structure"
        >
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 id="page-structure" className="text-xl font-semibold text-gray-800">
                Page Structure
              </h2>
              <button
                onClick={togglePageStructure}
                className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded"
                aria-label="Close Page Structure"
              >
                Close
              </button>
            </div>
            {renderPageStructure()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Accessibility;
