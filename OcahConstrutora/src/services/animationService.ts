export function observeElementVisibility(
  element: HTMLElement,
  onVisible: () => void,
) {
  if (!('IntersectionObserver' in window)) {
    onVisible()
    return () => undefined
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        onVisible()
        observer.disconnect()
      }
    },
    { threshold: 0.16 },
  )

  observer.observe(element)

  return () => observer.disconnect()
}
