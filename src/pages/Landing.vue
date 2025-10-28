<template>
  <section class="py-12">
    <div class="max-w-[1440px] mx-auto grid gap-12">
      <div
        class="relative overflow-hidden rounded-2xl bg-linear-to-br from-indigo-600 to-pink-500 text-white p-10"
      >
        <!-- wavy background using SVG -->
        <svg
          aria-hidden="true"
          class="absolute -top-10 -right-20 opacity-20"
          width="400"
          height="400"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(300,300)">
            <path
              d="M120,-140C155,-104,173,-52,172.6,-0.2C172.1,51.6,153.1,103.2,118.4,129.2C83.7,155.1,33.3,155.5,-14.9,157.1C-63.1,158.7,-110,161.5,-148.7,139.5C-187.5,117.5,-218.1,70.7,-227.6,21.3C-237.2,-28,-225.6,-78.8,-196.4,-118.3C-167.2,-157.9,-120.5,-185.1,-71.8,-202.1C-23.2,-219.1,27.4,-225.9,76.6,-214.7C125.8,-203.5,174,-174.1,120,-140Z"
              fill="white"
            />
          </g>
        </svg>

        <div class="relative flex flex-col md:flex-row items-center gap-8">
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-4xl sm:text-5xl font-extrabold leading-tight">
              Ticketly — Simplify your support workflow
            </h1>
            <p class="mt-4 text-lg text-white/90">
              Create, track and resolve tickets with a delightful UI. Built for
              teams who care about speed and clarity.
            </p>
            <div class="mt-6 flex justify-center md:justify-start gap-3">
              <router-link
                to="/auth/login"
                class="px-5 py-3 bg-white text-indigo-600 rounded font-medium"
              >
                Login
              </router-link>
              <router-link
                to="/auth/signup"
                class="px-5 py-3 border border-white/40 text-white rounded font-medium"
              >
                Get Started
              </router-link>
            </div>
          </div>

          <div
            class="w-64 h-64 rounded-full bg-white/20 flex items-center justify-center"
          >
            <div class="w-32 h-32 rounded-full bg-white/30"></div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 class="font-semibold">Fast setup</h3>
          <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Start tracking tickets in minutes with local session support and
            flexible flows.
          </p>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 class="font-semibold">Accessible</h3>
          <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Keyboard friendly, semantic HTML and focus states for improved
            accessibility.
          </p>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 class="font-semibold">Responsive</h3>
          <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Layouts that adapt across mobile, tablet and desktop.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default { name: "Landing" };
</script>
