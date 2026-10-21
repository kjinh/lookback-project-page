document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('copy-bibtex');
  if (button) button.addEventListener('click', async () => {
    const value = document.getElementById('bibtex-code').innerText;
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const el = document.createElement('textarea');
      el.value = value; document.body.appendChild(el); el.select();
      document.execCommand('copy'); el.remove();
    }
    button.textContent = 'Copied!';
    setTimeout(() => { button.textContent = 'Copy to clipboard'; }, 1500);
  });
});
