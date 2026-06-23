# Pexario React Clone

Install and start the website:

```bash
npm install
npm start
```

Then open:

```text
http://127.0.0.1:5173/
```

Do not open `index.html` directly. This is a Vite React application and must
run through the development or preview server.

## Contact Form Email

The contact forms submit directly to FormSubmit's AJAX endpoint, which forwards
submissions to `Hello@maaint.co`.

No API key is required. On the first live submission, FormSubmit may send a
confirmation email to `Hello@maaint.co`; confirm it once to activate delivery.
