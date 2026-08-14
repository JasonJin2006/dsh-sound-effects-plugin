window.__ModuleLoader__.load({
  id: '@jasonjin06/dsh-sound-effects',
  factory: (require) => {
    const module = { exports: {} }; const exports = module.exports; const React = require('react'); const { IconPlayOutline16 } = require('@deepseek-ai/dsh-client-ui-primitives')
    const NS = 'dsh-sound-effects'
    const css = document.createElement('style'); css.textContent = `.dse{max-width:720px;color:var(--dsw-alias-label-primary);display:flex;flex-direction:column;gap:12px}.dse-title{margin:0;font-size:16px;font-weight:500}.dse-intro{margin:0;color:var(--dsw-alias-label-tertiary);font-size:14px;line-height:22px}.dse-rows{display:flex;flex-direction:column;gap:8px}.dse-row{display:flex;align-items:center;gap:12px;padding:12px 14px;border:1px solid var(--dsw-alias-border-l2);border-radius:12px;background:var(--dsw-alias-bg-layer-1)}.dse-text{flex:1}.dse-label{font-size:14px;font-weight:500}.dse-hint{margin-top:4px;color:var(--dsw-alias-label-secondary);font-size:12px;line-height:18px}.dse-control{box-sizing:border-box;width:220px;height:32px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;padding:0 10px;background:var(--dsw-alias-bg-layer-1);color:inherit}.dse-side{display:flex;align-items:center;gap:8px}.dse-switch{width:36px;height:20px;border:0;border-radius:10px;padding:2px;cursor:pointer;background:var(--dsw-alias-border-l2);color:transparent}.dse-switch.on{background:var(--dsw-alias-state-business-primary)}.dse-switch:disabled,.dse-control:disabled,.dse-preview:disabled{opacity:.4;cursor:default}.dse-thumb{display:block;width:16px;height:16px;border-radius:50%;background:var(--dsw-alias-bg-layer-1);transition:transform .12s}.dse-switch.on .dse-thumb{transform:translateX(16px)}.dse-preview{appearance:none;color:var(--dsw-alias-label-tertiary);cursor:pointer;background:transparent;border:0;border-radius:7px;align-items:center;padding:6px;display:inline-flex;position:relative}.dse-preview:hover:not(:disabled){background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary)}.dse-preview:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:-1px}.dse-preview::after{content:attr(data-tip);background:var(--dsw-alias-label-primary);color:var(--dsw-alias-bg-layer-3);white-space:nowrap;opacity:0;pointer-events:none;border-radius:6px;padding:3px 8px;font-size:11px;line-height:17px;transition:opacity .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translateX(-50%)}.dse-preview:hover::after,.dse-preview:focus-visible::after{opacity:1}.dse-range{box-sizing:border-box;width:220px;height:32px;padding:0;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-layer-1);accent-color:var(--dsw-alias-state-business-primary)}.dse-status{font-size:12px;color:var(--dsw-alias-state-success-primary)}.dse-sound-nav>svg{display:none}.dse-sound-nav::before{content:"";width:16px;height:16px;flex:none;background:currentColor;-webkit-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M2.25 6.45c0-.55.45-1 1-1h1.58l2.69-2.12c.48-.38 1.18-.04 1.18.58v8.18c0 .62-.7.96-1.18.58l-2.69-2.12H3.25c-.55 0-1-.45-1-1v-3.1Z' fill='none' stroke='black' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M10.55 5.35a3.45 3.45 0 0 1 0 5.3M12.2 3.8a5.65 5.65 0 0 1 0 8.4' fill='none' stroke='black' stroke-width='1.3' stroke-linecap='round'/%3E%3C/svg%3E") center/16px 16px no-repeat;mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M2.25 6.45c0-.55.45-1 1-1h1.58l2.69-2.12c.48-.38 1.18-.04 1.18.58v8.18c0 .62-.7.96-1.18.58l-2.69-2.12H3.25c-.55 0-1-.45-1-1v-3.1Z' fill='none' stroke='black' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M10.55 5.35a3.45 3.45 0 0 1 0 5.3M12.2 3.8a5.65 5.65 0 0 1 0 8.4' fill='none' stroke='black' stroke-width='1.3' stroke-linecap='round'/%3E%3C/svg%3E") center/16px 16px no-repeat}`; document.head.appendChild(css)

    // ---- Custom synthesized cue engine (Web Audio) ----
    const CUE_NOTES = {
      turnDone: [[1318.5, 0, 0.20, 1], [1568.0, 0.07, 0.22, 0.85], [2093.0, 0.14, 0.30, 0.7]],
      approvalRequest: [[1760.0, 0, 0.14, 0.85], [1318.5, 0.09, 0.22, 0.7]],
      askRequest: [[1174.66, 0, 0.16, 0.8], [880.0, 0.10, 0.24, 0.7]],
    }

    function playCue(cue, volume) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext
      const notes = AudioCtx && CUE_NOTES[cue]
      if (!notes) return
      let actx
      try { actx = new AudioCtx() } catch { return }
      try { if (actx.state === 'suspended') actx.resume().catch(() => {}) } catch { /* autoplay policy */ }
      const now = actx.currentTime
      for (const [freq, delay, duration, scale] of notes) {
        const osc = actx.createOscillator()
        osc.type = 'sine'
        osc.frequency.setValueAtTime(freq, now + delay)
        const gain = actx.createGain()
        gain.gain.setValueAtTime(0, now + delay)
        gain.gain.linearRampToValueAtTime(Math.max(volume * scale, 0.0001), now + delay + 0.002)
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + duration)
        osc.connect(gain); gain.connect(actx.destination)
        osc.start(now + delay); osc.stop(now + delay + duration)
      }
      setTimeout(() => { actx.close().catch(() => {}) }, 900)
    }

    // ---- Custom generative thinking music (ambient while running) ----
    const MUSIC_PRESETS = {
      classic: { oscillatorType: 'triangle', attack: 0.01, decay: 0.2, sustain: 0.2, release: 0.3, filterFreq: 2000, reverbDecay: 0.3, reverbWet: 0.2, masterVolume: 0.08 },
      ethereal: { oscillatorType: 'sine', attack: 0.1, decay: 0.4, sustain: 0.4, release: 0.8, filterFreq: 3000, reverbDecay: 0.8, reverbWet: 0.35, masterVolume: 0.07 },
      digital: { oscillatorType: 'square', attack: 0.005, decay: 0.1, sustain: 0.1, release: 0.1, filterFreq: 5000, reverbDecay: 0.05, reverbWet: 0.05, masterVolume: 0.06 },
      retro: { oscillatorType: 'sawtooth', attack: 0.02, decay: 0.3, sustain: 0.3, release: 0.4, filterFreq: 1500, reverbDecay: 0.35, reverbWet: 0.25, masterVolume: 0.08 },
    }
    const SCALE_FREQS = [261.63, 293.66, 349.23, 392.0, 440.0, 523.25, 587.33]
    const OCTAVE_FREQS = [130.81, 146.83, 174.61, 196.0, 220.0, 261.63, 293.66]

    function createReverbImpulse(actx, duration) {
      const sampleRate = actx.sampleRate
      const length = Math.max(Math.round(sampleRate * duration), 1)
      const buffer = actx.createBuffer(2, length, sampleRate)
      for (let ch = 0; ch < 2; ch++) {
        const data = buffer.getChannelData(ch)
        for (let i = 0; i < length; i++) {
          const t = i / length
          data[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, 1.5) * (1 + Math.sin(t * Math.PI * 3) * 0.3)
        }
      }
      return buffer
    }

    const thinkingMusic = {
      ctx: null, master: null, filter: null, timer: 0, preset: 'ethereal',
      get running() { return this.timer !== 0 },
      start(preset) {
        if (this.running) return
        const AudioCtx = window.AudioContext || window.webkitAudioContext
        if (!AudioCtx || !MUSIC_PRESETS[preset]) return
        this.preset = preset
        let actx
        try { actx = new AudioCtx() } catch { return }
        this.ctx = actx
        try { if (actx.state === 'suspended') actx.resume().catch(() => {}) } catch { /* autoplay policy */ }
        this.buildChain()
        const tick = () => {
          if (!this.ctx) return
          this.note()
          this.timer = setTimeout(tick, 140 + Math.random() * 220)
        }
        tick()
      },
      stop() {
        clearTimeout(this.timer)
        this.timer = 0
        const ctx = this.ctx
        if (!ctx) { this.master = null; this.filter = null; return }
        try {
          const now = ctx.currentTime
          if (this.master) {
            this.master.gain.cancelScheduledValues(now)
            this.master.gain.setValueAtTime(this.master.gain.value, now)
            this.master.gain.linearRampToValueAtTime(0, now + 0.3)
          }
        } catch { /* already torn down */ }
        setTimeout(() => { ctx.close().catch(() => {}) }, 500)
        this.ctx = null; this.master = null; this.filter = null
      },
      buildChain() {
        const actx = this.ctx
        const cfg = MUSIC_PRESETS[this.preset]
        this.master = actx.createGain()
        this.master.gain.value = cfg.masterVolume
        this.master.connect(actx.destination)
        this.filter = actx.createBiquadFilter()
        this.filter.type = 'lowpass'
        this.filter.frequency.value = cfg.filterFreq
        this.filter.Q.value = 1
        this.filter.connect(this.master)
        const reverb = actx.createConvolver()
        reverb.buffer = createReverbImpulse(actx, cfg.reverbDecay)
        const reverbGain = actx.createGain()
        reverbGain.gain.value = cfg.reverbWet
        this.filter.connect(reverb)
        reverb.connect(reverbGain)
        reverbGain.connect(this.master)
      },
      note() {
        const actx = this.ctx
        const cfg = MUSIC_PRESETS[this.preset]
        if (!actx || !this.filter) return
        const t = actx.currentTime + 0.005
        const freqs = Math.random() < 0.15 ? OCTAVE_FREQS : SCALE_FREQS
        const freq = freqs[Math.floor(Math.random() * freqs.length)] * (1 + (Math.random() - 0.5) * 0.1)
        const osc = actx.createOscillator()
        osc.type = cfg.oscillatorType
        osc.frequency.setValueAtTime(freq, t)
        const env = actx.createGain()
        env.gain.setValueAtTime(0, t)
        env.gain.linearRampToValueAtTime(1, t + cfg.attack)
        env.gain.linearRampToValueAtTime(cfg.sustain, t + cfg.attack + cfg.decay)
        env.gain.setValueAtTime(cfg.sustain, t + cfg.attack + cfg.decay + 0.01)
        env.gain.linearRampToValueAtTime(0.001, t + cfg.attack + cfg.decay + 0.01 + cfg.release)
        osc.connect(env)
        env.connect(this.filter)
        osc.start(t)
        osc.stop(t + cfg.attack + cfg.decay + cfg.release + 0.05)
      },
      preview(preset) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext
        const cfg = MUSIC_PRESETS[preset]
        if (!AudioCtx || !cfg) return
        let actx
        try { actx = new AudioCtx() } catch { return }
        try { if (actx.state === 'suspended') actx.resume().catch(() => {}) } catch { /* autoplay policy */ }
        const filter = actx.createBiquadFilter()
        filter.type = 'lowpass'; filter.frequency.value = cfg.filterFreq
        const master = actx.createGain(); master.gain.value = cfg.masterVolume * 2; master.connect(actx.destination)
        const reverb = actx.createConvolver(); reverb.buffer = createReverbImpulse(actx, cfg.reverbDecay)
        const reverbGain = actx.createGain(); reverbGain.gain.value = cfg.reverbWet
        filter.connect(master); filter.connect(reverb); reverb.connect(reverbGain); reverbGain.connect(master)
        ;[SCALE_FREQS[0], SCALE_FREQS[2], SCALE_FREQS[4], SCALE_FREQS[6]].forEach((freq, i) => {
          const t = actx.currentTime + i * 0.05
          const osc = actx.createOscillator(); osc.type = cfg.oscillatorType; osc.frequency.setValueAtTime(freq, t)
          const env = actx.createGain()
          env.gain.setValueAtTime(0, t)
          env.gain.linearRampToValueAtTime(1, t + cfg.attack)
          env.gain.linearRampToValueAtTime(cfg.sustain, t + cfg.attack + cfg.decay)
          env.gain.linearRampToValueAtTime(0.001, t + cfg.attack + cfg.decay + cfg.release)
          osc.connect(env); env.connect(filter)
          osc.start(t); osc.stop(t + cfg.attack + cfg.decay + cfg.release + 0.05)
        })
        setTimeout(() => { actx.close().catch(() => {}) }, 3000)
      },
    }

    // ---- Live settings reader shared by the watcher (independent of React) ----
    function createSettingsReader(connection, remote) {
      let current = { enabled: true, volume: 0.35, turnDone: 'synth', approvalRequest: 'synth', askRequest: 'synth' }
      const load = async () => {
        const r = await connection.api.settings.describe({})
        if (!r.result.ok) return
        const found = r.result.value.namespaces.find((n) => n.ns === NS)
        if (found && found.value && typeof found.value === 'object') current = { ...current, ...found.value }
      }
      load().catch(() => {})
      const dispose = remote.$on('settings/document-updated', (ns) => { if (ns === NS) load().catch(() => {}) })
      return { get: () => current, dispose }
    }

    // ---- Session-list transition watcher: the browser-side event source ----
    function startWatcher(ctx, reader) {
      const sessions = typeof ctx.get === 'function' ? ctx.get('sessions') : ctx.sessions
      if (!sessions || !sessions.list || typeof sessions.list.subscribe !== 'function') return () => {}
      const prev = new Map()
      let baseline = true
      const check = () => {
        const snap = sessions.list.getSnapshot()
        const rows = snap && snap.byId ? Object.values(snap.byId) : []
        for (const row of rows) {
          if (!row || typeof row.id !== 'string') continue
          const before = prev.get(row.id)
          prev.set(row.id, { running: row.running, pending: row.pendingInteraction, completed: row.completed })
          if (baseline || before === undefined) continue
          const settings = reader.get()
          if (!settings.enabled) continue
          let played = false
          if (before.pending === undefined && row.pendingInteraction !== undefined) {
            const cue = row.pendingInteraction === 'question' ? 'askRequest' : 'approvalRequest'
            if (settings[cue] !== 'off') { playCue(cue, settings.volume); played = true }
          }
          if (!played && before.running && !row.running && row.pendingInteraction === undefined && settings.turnDone !== 'off') {
            playCue('turnDone', settings.volume)
            played = true
          }
          if (!played && !before.completed && row.completed && settings.turnDone !== 'off') {
            playCue('turnDone', settings.volume)
          }
        }
        // A session parked on pendingInteraction (approval / plan-review /
        // question) is waiting for the human, not thinking: it must not keep
        // the ambient music going. Once the user answers and the flag clears
        // while still running, music resumes on its own.
        const anyRunning = rows.some((row) => row && row.running && row.pendingInteraction === undefined)
        const current = reader.get()
        const wantMusic = current.enabled === true && anyRunning && current.thinkingMusic && current.thinkingMusic !== 'off'
        if (wantMusic && !thinkingMusic.running) thinkingMusic.start(current.thinkingMusic)
        else if (wantMusic && thinkingMusic.running && thinkingMusic.preset !== current.thinkingMusic) { thinkingMusic.stop(); thinkingMusic.start(current.thinkingMusic) }
        else if (!wantMusic && thinkingMusic.running) thinkingMusic.stop()
        baseline = false
      }
      const dispose = sessions.list.subscribe(() => check())
      check()
      return () => dispose()
    }

    // ---- Settings panel ----
    const Row = ({ title, hint, children }) => React.createElement('div', { className: 'dse-row' }, React.createElement('div', { className: 'dse-text' }, React.createElement('div', { className: 'dse-label' }, title), React.createElement('div', { className: 'dse-hint' }, hint)), React.createElement('div', { className: 'dse-side' }, children))

    function SoundSection({ connection, remote }) {
      const [view, setView] = React.useState(); const [writable, setWritable] = React.useState(false); const [error, setError] = React.useState(''); const [saved, setSaved] = React.useState(false)
      const load = React.useCallback(async () => { const r = await connection.api.settings.describe({}); if (!r.result.ok) throw new Error(r.result.error.message); setWritable(r.result.value.writable === true); setView(r.result.value.namespaces.find((n) => n.ns === NS)) }, [connection])
      React.useEffect(() => { load().catch((e) => setError(String(e))); const dispose = remote.$on('settings/document-updated', (ns) => ns === NS && load().catch(() => {})); return () => dispose() }, [load, remote])
      async function mutate(path, value) { if (!writable) return; const r = await connection.api.settings.mutate({ ns: NS, ops: [{ op: 'set', path: [path], value }], expectedRevision: view.revision }); if (!r.result.ok) return setError(r.result.error.message); setView(r.result.value); setSaved(true); setTimeout(() => setSaved(false), 1600) }
      if (!view) return React.createElement('div', { className: 'dse' }, React.createElement('p', { className: 'dse-intro' }, error || '正在加载音效设置…'))
      const v = view.value; const disabled = !writable
      const toggle = (key, title, hint) => React.createElement(Row, { title, hint, key }, React.createElement('button', { type: 'button', role: 'switch', 'aria-checked': v[key] !== false, className: `dse-switch ${v[key] !== false ? 'on' : ''}`, disabled, onClick: () => mutate(key, v[key] === false) }, React.createElement('span', { className: 'dse-thumb' })))
      const cueRow = (key, title, hint) => React.createElement(Row, { title, hint, key }, React.createElement('select', { className: 'dse-control', value: v[key] || 'synth', disabled, onChange: (e) => mutate(key, e.target.value) }, React.createElement('option', { value: 'synth' }, '合成音'), React.createElement('option', { value: 'off' }, '关闭')), React.createElement('button', { type: 'button', className: 'dse-preview', 'data-tip': '试听', 'aria-label': `试听${title}`, disabled, onClick: () => playCue(key, typeof v.volume === 'number' ? v.volume : 0.35) }, React.createElement(IconPlayOutline16)))
      return React.createElement('div', { className: 'dse' }, React.createElement('h2', { className: 'dse-title' }, '音效'), React.createElement('p', { className: 'dse-intro' }, '回合完成、需要审批、需要提问时在当前页面播放合成提示音。'), React.createElement('div', { className: 'dse-rows' }, toggle('enabled', '启用音效', '关闭后所有音效事件都会静默。'), React.createElement(Row, { title: '音量', hint: '合成音的播放音量。' }, React.createElement('input', { type: 'range', className: 'dse-range', min: 0, max: 1, step: 0.05, value: typeof v.volume === 'number' ? v.volume : 0.35, disabled, onChange: (e) => mutate('volume', Number(e.target.value)) })), cueRow('turnDone', '回合完成', '模型完成一个回合后播放提示音；后台会话完成时同样提示。'), cueRow('approvalRequest', '需要审批', '工具或操作需要用户批准时播放提示音。'), cueRow('askRequest', '需要回答', '模型向用户提问时播放提示音。'), React.createElement(Row, { title: '思考音乐', hint: '生成期间播放五声音阶环境音景，回合结束后自动淡出。' }, React.createElement('select', { className: 'dse-control', value: v.thinkingMusic || 'off', disabled, onChange: (e) => mutate('thinkingMusic', e.target.value) }, React.createElement('option', { value: 'off' }, '关闭'), React.createElement('option', { value: 'classic' }, '经典'), React.createElement('option', { value: 'ethereal' }, '空灵'), React.createElement('option', { value: 'digital' }, '数字'), React.createElement('option', { value: 'retro' }, '复古')), React.createElement('button', { type: 'button', className: 'dse-preview', 'data-tip': '试听', 'aria-label': '试听思考音乐', disabled, onClick: () => thinkingMusic.preview(v.thinkingMusic && v.thinkingMusic !== 'off' ? v.thinkingMusic : 'ethereal') }, React.createElement(IconPlayOutline16)))), saved ? React.createElement('div', { className: 'dse-status' }, '已保存') : null)
    }

    exports.inject = ['slots', 'connection', 'remote', 'sessions']; exports.apply = (ctx) => { const connection = ctx.get('connection'); const reader = createSettingsReader(connection, ctx.remote); const stopWatcher = startWatcher(ctx, reader); ctx.effect?.(() => () => { stopWatcher(); reader.dispose(); thinkingMusic.stop() }); const injected = () => ({ connection, remote: ctx.remote }); const decorateNav = () => { for (const button of document.querySelectorAll('[role="dialog"] nav button')) { const label = button.querySelector('span')?.textContent?.trim(); button.classList.toggle('dse-sound-nav', label === '音效') } }; const hideIn = (root) => { if (!(root instanceof Element)) return; for (const node of root.querySelectorAll('*')) { if (node.textContent?.trim() !== 'DSH 音效') continue; const target = node.parentElement ?? node; target.style.display = 'none'; target.setAttribute('aria-hidden', 'true') } }; const decorate = () => { decorateNav(); hideIn(document.documentElement) }; const observer = new MutationObserver(() => decorate()); observer.observe(document.documentElement, { childList: true, subtree: true }); decorate(); ctx.effect?.(() => () => observer.disconnect()); ctx.slots.inject('settings.section', () => ctx.slots.register({ name: 'settings.section', id: 'sound-effects', order: 16, label: () => '音效', inject: injected }, SoundSection)) }
    return module.exports
  },
})
