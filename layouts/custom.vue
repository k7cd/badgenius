<template>
  <div>
    <div>Custom Layout.</div>
    <header>
      <slot name="header"> Default header content </slot>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>
