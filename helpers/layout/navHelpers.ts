import { Dispatch } from 'redux';
import { setNavActiveLink } from '../../state/actions/navActions';

function onScroll(elem: HTMLElement, sectionId: string, dispatch: Dispatch): void {
  const currentYPos: number = window.pageYOffset;
  const mid: number = window.innerHeight / 2;
  const currentMid: number = currentYPos + mid;
  const elemTop: number = elem.offsetTop;

  if (elemTop > (currentMid - 100) && elemTop < (currentMid + 100)) {
    dispatch(setNavActiveLink(sectionId));
  }
}

export function addNavSectionListeners(sectionId: string, dispatch: Dispatch): void {
  const section: HTMLElement = document.getElementById(sectionId);
  window.addEventListener('scroll', () => onScroll(section, sectionId, dispatch));
}

export function removeNavSectionListeners(sectionId: string, dispatch: Dispatch): void {
  const section: HTMLElement = document.getElementById(sectionId);
  window.removeEventListener('scroll', () => onScroll(section, sectionId, dispatch));
}