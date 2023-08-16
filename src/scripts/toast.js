document.addEventListener('DOMContentLoaded', () => {
    const renderToast = document.querySelectorAll('.showToast');
    renderToast.forEach((e) => {
      e.addEventListener('click', () => {
        const toast = new bootstrap.Toast(document.getElementById("toast"));
        toast.show();
      });
    });
  });
  