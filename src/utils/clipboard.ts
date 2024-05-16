import { isBrowser, isPlatform } from './userAgent';
import { Toast } from '@components/index';

export function isSupported(): boolean {
  return (
    (window.document &&
      window.document.queryCommandSupported instanceof Function &&
      window.document.queryCommandSupported('copy') &&
      !(isBrowser('Firefox < 41') || isPlatform('iOS < 10.3'))) ||
    isBrowser('Chrome >= 43')
  );
}

export function copy(text: string, target?: HTMLElement): boolean {
  target = target || document.body;
  if (!target) return false;

  const prevActiveElement = document.activeElement;
  let successful = true;
  const tempTextArea = document.createElement('textarea');
  target.appendChild(tempTextArea);
  tempTextArea.value = text;

  if (isPlatform('iOS >= 10.3')) {
    const selection = document.createRange();
    selection.selectNodeContents(tempTextArea);
    const range = window.getSelection();
    if (range) {
      range.removeAllRanges();
      range.addRange(selection);
    }
    tempTextArea.setSelectionRange(0, 999999);
  } else {
    tempTextArea.select();
  }

  try {
    // Try to copy the text
    successful = document.execCommand('copy');
  } catch (error) {
    successful = false;
  }

  target.removeChild(tempTextArea);

  if (prevActiveElement !== null) {
    (prevActiveElement as any).focus();
  }

  return successful;
}

export function copyAsync(text: string): Promise<void> {
  const navigator = window.navigator;
  if (
    navigator &&
    navigator.clipboard &&
    typeof navigator.clipboard.writeText === 'function'
  ) {
    return navigator.clipboard.writeText(text);
  }

  return copy(text) ? Promise.resolve() : Promise.reject();
}

export async function copyText(text: string) {
  try {
    if (isSupported() && text) {
      try {
        await copyAsync(text);
        Toast.show('已复制');
      } catch (e) {
        alert(e);
        Toast.show('出错了');
      }
    }
  } catch (e) {
    alert(e);
    Toast.show('出错了');
  }
}
