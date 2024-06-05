<div>
    <header class="flex flex-col gap-y-8 py-8">
        <h1 class="fi-header-heading text-2xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-3xl">
            My Profile
        </h1>
        <p class="text-sm text-gray-500 dark:text-gray-400">
            Manage yout user profile here
        </p>
    </header>

    <x-filament-panels::form wire:submit="save">
        {{ $this->form }}

        <x-filament-panels::form.actions
            :actions="$this->getCachedFormActions()"
            :full-width="$this->hasFullWidthFormActions()"
            alignment="right"
        />
    </x-filament-panels::form>
</div>
