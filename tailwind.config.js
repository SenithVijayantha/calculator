/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },

      colors: {
        // Theme 1

        // Backgrounds

        'custom-very-dark-desaturated-blue-1': 'hsl(222, 26%, 31%)', // main background
        'custom-very-dark-desaturated-blue-2': 'hsl(223, 31%, 20%)', // toggle background, keypad background
        'custom-very-dark-desaturated-blue-3': 'hsl(224, 36%, 15%)', // screen background

        // Keys

        'custom-desaturated-dark-blue-1': 'hsl(225, 21%, 49%)', // key background
        'custom-desaturated-dark-blue-2': 'hsl(224, 28%, 35%)',  // key shadow

        'custom-red': 'hsl(6, 63%, 50%)', // key background, toggle
        'custom-dark-red': 'hsl(6, 70%, 34%)', // key shadow

        'custom-light-grayish-orange': 'hsl(30, 25%, 89%)', // key background
        'custom-grayish-orange': 'hsl(28, 16%, 65%)', // key shadow

        // Text

        'custom-very-dark-grayish-blue': 'hsl(221, 14%, 31%)',
        'custom-white': 'hsl(0, 0%, 100%)', // White

        // Theme 2

        // Backgrounds
        'custom-light-gray': 'hsl(0, 0%, 90%)', // main background
        'custom-grayish-red': 'hsl(0, 5%, 81%)', // toggle background, keypad background
        'custom-very-light-gray': 'hsl(0, 0%, 93%)', // screen background

        // Keys
        'custom-dark-moderate-cyan': 'hsl(185, 42%, 37%)', // key background
        'custom-very-dark-cyan': 'hsl(185, 58%, 25%)', // key shadow

        'custom-orange': 'hsl(25, 98%, 40%)', // key background, toggle
        'custom-dark-orange': 'hsl(25, 99%, 27%)', // key shadow

        'custom-light-grayish-yellow': 'hsl(45, 7%, 89%)', // key background
        'custom-dark-grayish-orange': 'hsl(35, 11%, 61%)', // key shadow

        // Text
        'custom-very-dark-grayish-yellow': 'hsl(60, 10%, 19%)',
        'custom-white': 'hsl(0, 0%, 100%)', // White

        // Theme 3

        // Backgrounds
        'custom-very-dark-violet-1': 'hsl(268, 75%, 9%)', // main background
        'custom-very-dark-violet-2': 'hsl(268, 71%, 12%)', // toggle background, keypad background, screen background

        // Keys
        'custom-dark-violet': 'hsl(281, 89%, 26%)', // key background
        'custom-vivid-magenta': 'hsl(285, 91%, 52%)', // key shadow

        'custom-pure-cyan': 'hsl(176, 100%, 44%)', // key background, toggle
        'custom-soft-cyan': 'hsl(177, 92%, 70%)', // key shadow

        'custom-very-dark-violet-3': 'hsl(268, 47%, 21%)', // key background
        'custom-dark-magenta': 'hsl(290, 70%, 36%)', // key shadow

        // Text
        'custom-light-yellow': 'hsl(52, 100%, 62%)',
        'custom-very-dark-blue': 'hsl(198, 20%, 13%)',
        'custom-white': 'hsl(0, 0%, 100%)', // White

      }
    },
  },
  plugins: [],
}