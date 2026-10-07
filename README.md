# Bootstrap-Style Scroll Animations

A lightweight, dependency-free scroll animation utility for Bootstrap / ASP.NET Core MVC websites.

It provides Bootstrap-like utility classes for:

- Sections
- Headings and text
- Cards
- Images
- Buttons / CTAs
- Accordions
- FAQs
- Tables
- Lists
- Forms
- Statistics
- Dividers
- Staggered content

It uses the browser's `IntersectionObserver` API instead of a continuous `scroll` event, keeping the implementation lightweight and mobile friendly.

---

## 1. Files

```text
bootstrap-scroll-animations/
│
├── scroll-animations.css
├── scroll-animations.js
└── README.md
```

---

# 2. Installation

Copy:

```text
scroll-animations.css
```

to:

```text
wwwroot/css/
```

Copy:

```text
scroll-animations.js
```

to:

```text
wwwroot/js/
```

Then add them to your ASP.NET Core MVC `_Layout.cshtml`.

```html
<link rel="stylesheet" href="~/css/scroll-animations.css" />

<script src="~/js/scroll-animations.js"></script>
```

Prefer placing the JavaScript near the bottom of the layout after your other JavaScript files.

---

# 3. Basic Usage

Simply add an animation class to an element.

```html
<section class="sa-fade-up">
    <div class="container">
        <h2>Our Services</h2>
        <p>Professional services for modern businesses.</p>
    </div>
</section>
```

You do NOT need to add:

```html
is-visible
```

JavaScript adds it automatically when the element enters the viewport.

---

# 4. Animation Classes

## General / Section Animations

| Class | Effect | Best For |
|---|---|---|
| `sa-fade` | Simple fade | Small sections, labels |
| `sa-fade-up` | Fade + move upward | Sections, content blocks |
| `sa-fade-down` | Fade + move downward | Hero/intro content |
| `sa-fade-left` | Fade + move from right | Images/content |
| `sa-fade-right` | Fade + move from left | Text/content |
| `sa-zoom` | Slight zoom in | Cards, feature blocks |
| `sa-zoom-out` | Slight zoom out | Large sections |
| `sa-card` | Fade + slide + small scale | Cards |
| `sa-blur` | Blur + fade | Premium/hero elements |
| `sa-rotate` | Slight rotation + fade | Decorative blocks |

### Recommended

For normal website sections:

```html
<section class="sa-fade-up">
```

For alternating image/text sections:

```html
<div class="col-lg-6 sa-fade-right">
```

and:

```html
<div class="col-lg-6 sa-fade-left">
```

---

# 5. Text Animation Classes

Text should generally use smaller movements than sections.

| Class | Effect | Best For |
|---|---|---|
| `sa-text-up` | Small upward reveal | H1, H2, paragraph |
| `sa-text-left` | Small horizontal reveal | Paragraphs/buttons |
| `sa-text-reveal` | Clip/mask reveal | Section headings |
| `sa-text-mask` | Content rises from bottom | Premium headings |
| `sa-line` | Animated underline | Labels/headings |

### Heading

```html
<h2 class="sa-text-up">
    Why Choose Us?
</h2>
```

### Premium heading

```html
<h2 class="sa-text-reveal">
    Build Your Business
</h2>
```

### Animated underline

```html
<h2 class="sa-line">
    Our Services
</h2>
```

---

# 6. Cards

Use:

```html
<div class="sa-card">
    ...
</div>
```

Good for:

- Service cards
- Product cards
- Team cards
- Blog cards
- Portfolio cards
- Pricing cards
- Feature cards

Example:

```html
<div class="row g-4">

    <div class="col-md-4">
        <div class="sa-card">
            <h4>Company Formation</h4>
            <p>Start your business easily.</p>
        </div>
    </div>

</div>
```

---

# 7. Staggered Cards

For multiple cards, use `sa-stagger` on the parent.

```html
<div class="row g-4 sa-stagger">

    <div class="col-md-4">
        <div class="card">
            <h4>Company Formation</h4>
        </div>
    </div>

    <div class="col-md-4">
        <div class="card">
            <h4>Visa Services</h4>
        </div>
    </div>

    <div class="col-md-4">
        <div class="card">
            <h4>PRO Services</h4>
        </div>
    </div>

</div>
```

The cards appear one after another:

```text
Card 1
   ↓
Card 2
   ↓
Card 3
```

This is recommended for:

- Service grids
- Product grids
- Blog cards
- Portfolio cards
- Feature grids
- Team members

---

# 8. Images

## Normal image reveal

```html
<div class="sa-image">
    <img src="/images/about.jpg"
         class="img-fluid"
         alt="About">
</div>
```

The image starts slightly zoomed and smoothly returns to normal.

Best for:

- About images
- Hero images
- Service images
- Portfolio images
- Blog images

---

## Image slide reveal

```html
<div class="sa-image-reveal">
    <img src="/images/about.jpg"
         class="img-fluid"
         alt="About">
</div>
```

Best for:

- Large feature images
- About sections
- Case studies
- Portfolio sections

---

# 9. Accordions / FAQ

For Bootstrap accordions, animate the individual accordion items rather than the entire accordion container.

Recommended:

```html
<div class="accordion-item sa-fade-up">
    ...
</div>
```

For multiple FAQ items:

```html
<div class="accordion">

    <div class="accordion-item sa-fade-up">
        ...
    </div>

    <div class="accordion-item sa-fade-up sa-delay-1">
        ...
    </div>

    <div class="accordion-item sa-fade-up sa-delay-2">
        ...
    </div>

</div>
```

### Better option for many FAQ items

Use:

```html
<div class="accordion sa-stagger">

    <div class="accordion-item">
        ...
    </div>

    <div class="accordion-item">
        ...
    </div>

    <div class="accordion-item">
        ...
    </div>

</div>
```

This creates a subtle sequential reveal.

### Important

Do NOT animate the Bootstrap accordion's internal `.accordion-collapse` with these classes.

Bootstrap already controls the opening/closing height of:

```text
.accordion-collapse
```

Animating that element with transform/opacity utilities can interfere with Bootstrap's collapse behavior.

Animate:

```text
.accordion-item
```

instead.

---

# 10. FAQ Questions

For FAQ sections, a good pattern is:

```html
<div class="accordion sa-stagger">

    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed">
                What services do you provide?
            </button>
        </h2>

        <div class="accordion-collapse collapse">
            <div class="accordion-body">
                We provide a range of professional services.
            </div>
        </div>
    </div>

</div>
```

The FAQ list enters smoothly while Bootstrap still handles the actual accordion opening/closing.

---

# 11. Tables

For tables, animate the wrapper instead of individual rows.

Recommended:

```html
<div class="table-responsive sa-fade-up">
    <table class="table">
        ...
    </table>
</div>
```

Good for:

- Pricing tables
- Comparison tables
- Admin tables
- Service tables
- Product tables

Avoid putting animations on every `<tr>` because large tables can become visually busy.

---

# 12. Forms

Use a small animation on the form container.

```html
<form class="sa-fade-up">

    <div class="mb-3">
        <label>Name</label>
        <input class="form-control">
    </div>

    <div class="mb-3">
        <label>Email</label>
        <input class="form-control">
    </div>

    <button class="btn btn-primary">
        Submit
    </button>

</form>
```

For a contact section:

```html
<div class="row g-5">

    <div class="col-lg-6 sa-fade-right">
        ...
    </div>

    <div class="col-lg-6 sa-fade-left">
        ...
    </div>

</div>
```

---

# 13. Buttons / CTA

Buttons should use small animations.

Recommended:

```html
<a href="#" class="btn btn-primary sa-text-up">
    Get Started
</a>
```

or:

```html
<a href="#" class="btn btn-primary sa-fade-up">
    Contact Us
</a>
```

Avoid large zoom or large slide animations on buttons.

---

# 14. Statistics / Counters

Use:

```html
<div class="sa-zoom">
    <h3>250+</h3>
    <p>Clients</p>
</div>
```

For multiple statistics:

```html
<div class="row sa-stagger">

    <div class="col-md-3">
        <div>
            <h3>250+</h3>
            <p>Clients</p>
        </div>
    </div>

    <div class="col-md-3">
        <div>
            <h3>15+</h3>
            <p>Services</p>
        </div>
    </div>

</div>
```

Note: These classes animate the statistic block. They do NOT create number-counting animations.

---

# 15. Lists

For a normal list:

```html
<ul class="sa-fade-up">
    <li>Professional service</li>
    <li>Experienced team</li>
    <li>Fast support</li>
</ul>
```

For individual list items:

```html
<ul class="sa-stagger">

    <li>Professional service</li>
    <li>Experienced team</li>
    <li>Fast support</li>

</ul>
```

---

# 16. Dividers

Use:

```html
<hr class="sa-divider">
```

The divider grows horizontally when it enters the viewport.

Useful for:

- Section separators
- Heading decorations
- Timeline sections
- Content separators

---

# 17. Speed Utilities

You can combine these with animation classes.

### Fast

```html
<div class="sa-fade-up sa-fast">
```

Duration:

```text
450ms
```

### Default

```html
<div class="sa-fade-up">
```

Duration:

```text
700ms
```

### Slow

```html
<div class="sa-fade-up sa-slow">
```

Duration:

```text
1000ms
```

Recommended:

- Buttons: `sa-fast`
- Text: default
- Sections: default
- Large images: `sa-slow`

---

# 18. Distance Utilities

### Small

```html
<div class="sa-fade-up sa-distance-sm">
```

Uses approximately:

```text
20px
```

Best for:

- Text
- Buttons
- Small cards
- FAQs

### Default

```html
<div class="sa-fade-up">
```

Uses approximately:

```text
40px
```

Best for:

- Sections
- Cards
- Images

### Large

```html
<div class="sa-fade-up sa-distance-lg">
```

Uses approximately:

```text
60px
```

Use sparingly.

---

# 19. Delay Utilities

```html
<div class="sa-fade-up sa-delay-1">
```

Available:

| Class | Delay |
|---|---:|
| `sa-delay-1` | 100ms |
| `sa-delay-2` | 200ms |
| `sa-delay-3` | 300ms |
| `sa-delay-4` | 400ms |

Example:

```html
<h2 class="sa-text-up">
    Our Services
</h2>

<p class="sa-text-up sa-delay-1">
    Professional business solutions.
</p>

<a class="btn btn-primary sa-fade-up sa-delay-2">
    Contact Us
</a>
```

---

# 20. Recommended Animation by Component

| Component | Recommended Class |
|---|---|
| Hero heading | `sa-text-up` |
| Hero paragraph | `sa-text-up sa-delay-1` |
| Hero button | `sa-text-up sa-delay-2` |
| Section heading | `sa-text-reveal` |
| Section paragraph | `sa-text-up` |
| Normal section | `sa-fade-up` |
| Image + text left | `sa-fade-right` |
| Image + text right | `sa-fade-left` |
| Service cards | `sa-stagger` |
| Product cards | `sa-stagger` |
| Blog cards | `sa-stagger` |
| Portfolio cards | `sa-stagger` |
| Team cards | `sa-stagger` |
| Feature cards | `sa-stagger` |
| Large image | `sa-image` |
| Feature image | `sa-image-reveal` |
| FAQ container | `sa-fade-up` |
| FAQ accordion | `sa-stagger` |
| Accordion item | `sa-fade-up` |
| Pricing table | `sa-fade-up` |
| Normal table | `sa-fade-up` |
| Contact form | `sa-fade-up` |
| Contact information | `sa-fade-right` |
| CTA section | `sa-fade-up` |
| CTA heading | `sa-text-up` |
| Button | `sa-text-up` |
| Statistics | `sa-zoom` |
| List | `sa-fade-up` |
| Timeline items | `sa-stagger` |
| Divider | `sa-divider` |

---

# 21. Recommended Pattern for a Complete Section

```html
<section class="py-5">

    <div class="container">

        <div class="text-center mb-5">

            <span class="sa-text-reveal">
                OUR SERVICES
            </span>

            <h2 class="sa-text-up">
                Professional Business Services
            </h2>

            <p class="sa-text-up sa-delay-1">
                Everything you need to establish and grow your business.
            </p>

        </div>

        <div class="row g-4 sa-stagger">

            <div class="col-lg-4 col-md-6">
                <div class="card h-100">
                    ...
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="card h-100">
                    ...
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="card h-100">
                    ...
                </div>
            </div>

        </div>

    </div>

</section>
```

This gives a clean sequence:

```text
SECTION LABEL
      ↓
HEADING
      ↓
DESCRIPTION
      ↓
CARD 1 → CARD 2 → CARD 3
```

---

# 22. Performance

This library intentionally avoids:

- jQuery
- GSAP
- AOS
- continuous `scroll` listeners
- `setInterval`
- expensive layout calculations
- JavaScript animation loops

It primarily uses:

```text
IntersectionObserver
        +
CSS transform
        +
CSS opacity
        +
CSS transitions
```

After an element becomes visible, it is removed from the observer:

```javascript
observer.unobserve(entry.target);
```

Therefore each animation normally runs only once.

---

# 23. Mobile Behavior

On screens below 768px:

- Animation distance becomes smaller.
- Animation duration becomes shorter.
- Blur is disabled.
- Image zoom is reduced.
- Stagger timing becomes shorter.

This prevents large desktop-style movements from feeling excessive on mobile.

---

# 24. Reduced Motion

Users who have enabled reduced motion in their operating system automatically get animations disabled.

The CSS uses:

```css
@media (prefers-reduced-motion: reduce)
```

Content remains visible and usable.

---

# 25. Important Usage Rules

### DO

Use:

```html
<section class="sa-fade-up">
```

Use:

```html
<div class="row sa-stagger">
```

Use:

```html
<h2 class="sa-text-reveal">
```

Use:

```html
<div class="sa-image">
```

### DON'T

Do not animate every element on a page.

Bad:

```html
<section class="sa-fade-up">
    <div class="sa-fade-up">
        <h2 class="sa-text-up">
            ...
        </h2>

        <p class="sa-text-up">
            ...
        </p>

        <button class="sa-fade-up">
            ...
        </button>
    </div>
</section>
```

This creates too many competing animations.

Instead:

```html
<section class="sa-fade-up">
    <div>
        <h2 class="sa-text-up">
            ...
        </h2>

        <p>
            ...
        </p>

        <button class="btn btn-primary">
            ...
        </button>
    </div>
</section>
```

---

# 26. Recommended Rule of Thumb

For most pages:

```text
Hero
 ├── Text → sa-text-up
 ├── Paragraph → sa-text-up + delay
 └── CTA → sa-text-up + delay

Section
 ├── Label → sa-text-reveal
 ├── Heading → sa-text-up
 └── Content → sa-fade-up

Cards
 └── Parent → sa-stagger

Image
 └── sa-image

FAQ
 └── Accordion → sa-stagger

CTA
 └── sa-fade-up
```

Keep animations subtle. The goal is to make the website feel responsive and polished, not to make every element visibly "fly in".

---

# 27. Browser Compatibility

The library uses standard modern browser APIs and CSS features.

The primary JavaScript API is:

```javascript
IntersectionObserver
```

Modern Chrome, Edge, Firefox, and Safari support it.

---

# 28. ASP.NET Core MVC Example

In `_Layout.cshtml`:

```html
<link rel="stylesheet" href="~/css/scroll-animations.css" />

...

<script src="~/js/scroll-animations.js"></script>
```

Then in any Razor view or partial:

```html
<section class="py-5 sa-fade-up">

    <div class="container">

        <h2 class="sa-text-reveal">
            Our Services
        </h2>

        <div class="row g-4 sa-stagger">

            <div class="col-md-4">
                <div class="card">
                    Service 1
                </div>
            </div>

            <div class="col-md-4">
                <div class="card">
                    Service 2
                </div>
            </div>

            <div class="col-md-4">
                <div class="card">
                    Service 3
                </div>
            </div>

        </div>

    </div>

</section>
```

No controller changes are required.

No NuGet package is required.

No npm package is required.

No Bootstrap JavaScript changes are required.
