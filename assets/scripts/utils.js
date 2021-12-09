import {
  TweenLite,
  Power0,
} from 'gsap';

export default function getOffsetElement(element_) {
  const rect = element_.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft,
  };
}

export function scrollTo(element, offset = 0, duration = 0.6) {
  TweenLite.to([document.body, document.documentElement], duration, {
    scrollTop: getOffsetElement(element).top - offset,
    ease: Power0.easeNone,
  });
}

export function getTimeFrames(startFrame, endFrame) {
  const oneFrame = (1 / 30);
  return ((oneFrame * endFrame) - (oneFrame * startFrame));
}

export function getTransformY(el) {
  const transform = getComputedStyle(el).transform.replace(/[(|)]/g, '');
  const arr = transform.split(',');
  return Number(arr[arr.length - 1]);
}
