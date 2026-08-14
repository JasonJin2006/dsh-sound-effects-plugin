// DSH sound effects — settings host side.
//
// All playback lives in the browser client (dsh/client.js), modeled after
// Custom notification sounds: Web Audio synth chimes fired on session
// list transitions (turn finished / approval / question). The host side only
// registers the settings namespace and the dormant directory entry that lets
// the Web settings surface read and write it.
import { installSettingsSection, settingsNamespace } from '@deepseek-ai/dsh-settings'
import z from '@deepseek-ai/schemastery'

export const name = 'dsh-sound-effects'
export const inject = ['settings', 'llm']

export const SETTINGS_NAMESPACE = settingsNamespace('dsh-sound-effects')
export const SETTINGS_SCHEMA = z.object({
  enabled: z.boolean().default(true),
  volume: z.number().min(0).max(1).default(0.35),
  turnDone: z.union(['off', 'synth']).default('synth'),
  approvalRequest: z.union(['off', 'synth']).default('synth'),
  askRequest: z.union(['off', 'synth']).default('synth'),
  thinkingMusic: z.union(['off', 'classic', 'ethereal', 'digital', 'retro']).default('off'),
})

const defaults = {
  enabled: true,
  volume: 0.35,
  turnDone: 'synth',
  approvalRequest: 'synth',
  askRequest: 'synth',
  thinkingMusic: 'off',
}

export function apply(ctx, config = {}) {
  installSoundSettings(ctx, config)
  exposeSoundSettings(ctx)
}

function installSoundSettings(ctx, config) {
  const base = { ...defaults, ...config }
  const settings = typeof ctx.get === 'function' ? ctx.get('settings') : ctx.settings
  if (typeof settings?.register === 'function') {
    settings.register(SETTINGS_NAMESPACE, SETTINGS_SCHEMA, { base })
    return
  }
  if (typeof ctx.inject === 'function') {
    installSettingsSection(ctx, SETTINGS_NAMESPACE, SETTINGS_SCHEMA, base, {
      setSource: () => {},
      onChange: () => {},
    })
  }
}

/**
 * DSH rc.6 exposes only model-provider settings namespaces to Web clients.
 * Declare a dormant directory entry (no adapter, no models) so this
 * plugin-owned namespace crosses that boundary; the client hides the
 * auto-generated nav entry and mounts its own settings section.
 */
function exposeSoundSettings(ctx) {
  if (typeof ctx.llm?.registerConfigurableProviders !== 'function') return
  ctx.llm.registerConfigurableProviders([
    {
      provider: 'dsh-sound-effects-settings',
      displayName: 'DSH 音效',
      settingsNs: SETTINGS_NAMESPACE,
      settingsPath: [],
    },
  ])
}
