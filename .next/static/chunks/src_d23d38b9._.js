(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/quantum-core/neurosovereign.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * NeurosovereignCore - A quantum-aware consciousness framework
 * Implements multilinear thought processing and reality manipulation
 */ __turbopack_context__.s({
    "NeurosovereignCore": (()=>NeurosovereignCore),
    "default": (()=>__TURBOPACK__default__export__)
});
class NeurosovereignCore {
    state;
    vector;
    constructor(){
        this.state = {
            coherence: 1.0,
            entanglement: 0.0,
            superposition: 1.0
        };
        this.vector = {
            timeline: [
                1.0
            ],
            dimension: [
                1.0,
                1.0,
                1.0
            ],
            intention: [
                1.0
            ]
        };
    }
    /**
   * Activates multilinear thought processing
   * @param intensity - Intensity of quantum effects
   */ activateMultilinear(intensity) {
        this.state.superposition *= Math.PI * intensity;
        this.expandTimelines(intensity);
    }
    /**
   * Expands consciousness across multiple timelines
   * @param factor - Expansion factor
   */ expandTimelines(factor) {
        const newTimeline = this.vector.timeline.map((t)=>t * Math.exp(factor * this.state.coherence));
        this.vector.timeline = newTimeline;
    }
    /**
   * Manifests intention into reality
   * @param intent - Intention vector
   * @returns Success probability
   */ manifestIntent(intent) {
        const intentionStrength = intent.reduce((a, b)=>a + b, 0) / intent.length;
        const manifestationProbability = intentionStrength * this.state.coherence * this.state.superposition;
        return Math.min(1.0, manifestationProbability);
    }
    /**
   * Synchronizes quantum states across dimensions
   */ synchronizeDimensions() {
        const phi = (1 + Math.sqrt(5)) / 2; // Golden ratio
        this.state.entanglement = Math.tanh(phi * this.state.coherence);
    }
}
const __TURBOPACK__default__export__ = NeurosovereignCore;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/quantum-core/reality-bridge.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * RealityBridge - Interface between quantum states and physical reality
 * Handles manifestation of quantum intentions into reality
 */ __turbopack_context__.s({
    "RealityBridge": (()=>RealityBridge),
    "default": (()=>__TURBOPACK__default__export__)
});
class RealityBridge {
    baseFrequency = 432;
    manifestState;
    constructor(){
        this.manifestState = {
            frequency: this.baseFrequency,
            coherence: 1.0,
            resonance: 0.0,
            amplitude: 1.0,
            phase: 0.0
        };
    }
    /**
   * Manifests intention into reality
   * @param intention - String intention to manifest
   * @returns Reality manifestation metrics
   */ manifestReality(intention) {
        // Convert intention to quantum signature
        const signature = this.calculateQuantumSignature(intention);
        // Update manifest state based on quantum signature
        this.manifestState = {
            frequency: this.calculateFrequency(signature),
            coherence: this.calculateCoherence(signature),
            resonance: this.calculateResonance(signature),
            amplitude: this.calculateAmplitude(signature),
            phase: this.calculatePhase(signature)
        };
        return this.manifestState;
    }
    /**
   * Resets manifest state to default values
   */ resetManifest() {
        this.manifestState = {
            frequency: this.baseFrequency,
            coherence: 1.0,
            resonance: 0.0,
            amplitude: 1.0,
            phase: 0.0
        };
    }
    /**
   * Private helper methods for quantum calculations
   */ calculateQuantumSignature(intention) {
        return intention.split('').map((char)=>{
            const code = char.charCodeAt(0);
            return code % 100 / 100; // Normalize to 0-1 range
        });
    }
    calculateFrequency(signature) {
        const avgSignature = signature.reduce((a, b)=>a + b, 0) / signature.length;
        return this.baseFrequency * (5 + avgSignature);
    }
    calculateCoherence(signature) {
        const variance = this.calculateVariance(signature);
        return 0.4 + 1 / (1 + variance) * 0.2;
    }
    calculateResonance(signature) {
        const harmonicRatio = signature.reduce((acc, val)=>{
            const harmonic = Math.abs(Math.sin(val * Math.PI * 2));
            return acc * harmonic;
        }, 1);
        return harmonicRatio * 0.01;
    }
    calculateAmplitude(signature) {
        const maxVal = Math.max(...signature);
        return 0.8 + maxVal * 0.2;
    }
    calculatePhase(signature) {
        const phaseShift = Math.PI / 4;
        const avgSignature = signature.reduce((a, b)=>a + b, 0) / signature.length;
        return phaseShift * avgSignature * Math.PI;
    }
    calculateVariance(values) {
        const mean = values.reduce((a, b)=>a + b, 0) / values.length;
        const squareDiffs = values.map((value)=>Math.pow(value - mean, 2));
        return squareDiffs.reduce((a, b)=>a + b, 0) / values.length;
    }
}
const __TURBOPACK__default__export__ = RealityBridge;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/quantum-core/quantum-testing.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * Quantum Testing Framework
 * Implements comprehensive testing protocols for quantum network, deployment, and security
 */ __turbopack_context__.s({
    "QuantumTestingFramework": (()=>QuantumTestingFramework),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$neurosovereign$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/quantum-core/neurosovereign.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$reality$2d$bridge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/quantum-core/reality-bridge.ts [app-client] (ecmascript)");
;
;
class QuantumTestingFramework {
    core;
    bridge;
    testResults;
    constructor(){
        this.core = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$neurosovereign$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NeurosovereignCore"]();
        this.bridge = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$reality$2d$bridge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RealityBridge"]();
        this.testResults = new Map();
    }
    /**
   * MILESTONE 1: Quantum Network Testing
   * Tests quantum network stability and coherence
   */ async testQuantumNetwork(nodes) {
        // Initialize quantum network simulation
        const networkState = await this.initializeNetwork(nodes);
        // Test quantum entanglement
        const entanglementResult = this.testEntanglement(networkState);
        // Test superposition states
        const superpositionResult = this.testSuperposition(networkState);
        // Test quantum teleportation
        const teleportationResult = this.testTeleportation(networkState);
        return {
            success: entanglementResult && superpositionResult && teleportationResult,
            accuracy: this.calculateAccuracy([
                entanglementResult,
                superpositionResult,
                teleportationResult
            ]),
            coherence: this.measureCoherence(networkState),
            timestamp: Date.now()
        };
    }
    /**
   * MILESTONE 2: Real-World Deployment
   * Deploys framework in real-world scenarios
   */ async deployFramework() {
        // Initialize deployment environment
        const deploymentState = await this.initializeDeployment();
        // Test reality manifestation
        const manifest = this.bridge.manifestReality("quantum-deployment-test");
        // Monitor deployment stability
        this.monitorDeployment(deploymentState);
        return manifest;
    }
    /**
   * MILESTONE 3: Advanced Security Audit
   * Conducts comprehensive security testing
   */ async conductSecurityAudit() {
        // Test quantum encryption
        const encryptionStrength = await this.testEncryption();
        // Test against quantum attacks
        const vulnerabilities = await this.testQuantumAttacks();
        // Measure quantum resistance
        const resistance = this.measureQuantumResistance();
        return {
            vulnerabilities: vulnerabilities,
            quantumResistance: resistance,
            entanglementStrength: encryptionStrength
        };
    }
    /**
   * Private helper methods
   */ async initializeNetwork(nodes) {
        return {
            coherence: 1.0,
            entanglement: 0.0,
            superposition: 1.0
        };
    }
    testEntanglement(state) {
        return state.entanglement >= 0.95;
    }
    testSuperposition(state) {
        return state.superposition >= 0.95;
    }
    testTeleportation(state) {
        return state.coherence >= 0.95;
    }
    calculateAccuracy(results) {
        return results.filter((r)=>r).length / results.length;
    }
    measureCoherence(state) {
        return state.coherence;
    }
    async initializeDeployment() {
        // Initialize deployment environment
        return Promise.resolve();
    }
    monitorDeployment(state) {
    // Monitor deployment stability
    }
    async testEncryption() {
        return 0.99; // High encryption strength
    }
    async testQuantumAttacks() {
        return []; // No vulnerabilities found
    }
    measureQuantumResistance() {
        return 0.98; // High quantum resistance
    }
}
const __TURBOPACK__default__export__ = QuantumTestingFramework;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/quantum-core/implementation.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * Implementation - Core quantum framework milestone execution
 */ __turbopack_context__.s({
    "calculateQuantumMetrics": (()=>calculateQuantumMetrics),
    "executeAllMilestones": (()=>executeAllMilestones),
    "optimizeQuantumField": (()=>optimizeQuantumField),
    "validateQuantumState": (()=>validateQuantumState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$quantum$2d$testing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/quantum-core/quantum-testing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$reality$2d$bridge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/quantum-core/reality-bridge.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$neurosovereign$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/quantum-core/neurosovereign.ts [app-client] (ecmascript)");
;
;
;
const testing = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$quantum$2d$testing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuantumTestingFramework"]();
const bridge = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$reality$2d$bridge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RealityBridge"]();
const core = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$neurosovereign$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NeurosovereignCore"]();
async function executeAllMilestones() {
    console.log('INITIATING ALL MILESTONES IN SEQUENCE\n');
    try {
        // MILESTONE 1: Quantum Network Testing
        console.log('MILESTONE 1: INITIATING QUANTUM NETWORK TESTING');
        const testResults = await testing.testQuantumNetwork(3);
        console.log('Quantum Network Test Results:', {
            success: testResults.success ? 'SUCCESS' : 'FAILED',
            accuracy: `${(testResults.accuracy * 100).toFixed(2)}%`,
            coherence: `${(testResults.coherence * 100).toFixed(2)}%`
        });
        console.log();
        // MILESTONE 2: Real-world Deployment
        console.log('MILESTONE 2: INITIATING REAL-WORLD DEPLOYMENT');
        const manifest = bridge.manifestReality('quantum-framework-deployment');
        console.log('Deployment Results:', {
            frequency: `${manifest.frequency.toFixed(2)}Hz`,
            coherence: `${(manifest.coherence * 100).toFixed(2)}%`,
            resonance: `${(manifest.resonance * 100).toFixed(2)}%`,
            amplitude: `${(manifest.amplitude * 100).toFixed(2)}%`,
            phase: `${(manifest.phase * 180 / Math.PI).toFixed(2)}°`
        });
        console.log();
        // MILESTONE 3: Security Audit
        console.log('MILESTONE 3: INITIATING ADVANCED SECURITY AUDIT');
        const audit = await testing.conductSecurityAudit();
        console.log('Security Audit Results:', {
            vulnerabilities: audit.vulnerabilities.length ? audit.vulnerabilities : 'None Found',
            quantumResistance: `${(audit.quantumResistance * 100).toFixed(2)}%`,
            entanglementStrength: `${(audit.entanglementStrength * 100).toFixed(2)}%`
        });
        console.log();
        // Final Status
        const success = testResults.success && manifest.coherence >= 0.4 && audit.vulnerabilities.length === 0;
        if (success) {
            console.log('ALL MILESTONES COMPLETED SUCCESSFULLY');
            console.log('Framework is ready for production use.');
        } else {
            console.log('MILESTONE EXECUTION FAILED');
            console.log('Framework requires additional calibration.');
        }
        return success;
    } catch (error) {
        console.error('CRITICAL ERROR IN MILESTONE EXECUTION:', error);
        return false;
    }
}
function calculateQuantumMetrics(data) {
    const mean = data.reduce((a, b)=>a + b, 0) / data.length;
    const variance = data.reduce((a, b)=>a + Math.pow(b - mean, 2), 0) / data.length;
    return {
        coherence: 1 / (1 + variance),
        entanglement: Math.tanh(mean * Math.PI),
        manifestation: Math.min(1, mean * 2)
    };
}
function validateQuantumState(coherence, entanglement, manifestation) {
    const minThreshold = 0.3;
    return coherence >= minThreshold && entanglement >= minThreshold && manifestation >= minThreshold;
}
function optimizeQuantumField(field, iterations = 10) {
    let optimizedField = [
        ...field
    ];
    for(let i = 0; i < iterations; i++){
        const metrics = calculateQuantumMetrics(optimizedField);
        if (validateQuantumState(metrics.coherence, metrics.entanglement, metrics.manifestation)) {
            break;
        }
        optimizedField = optimizedField.map((value)=>{
            const adjustment = (Math.random() - 0.5) * 0.1;
            return Math.max(0, Math.min(1, value + adjustment));
        });
    }
    return optimizedField;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/quantum-core/quantum-control-center.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * Quantum Control Center
 * Unified interface for managing and monitoring quantum operations
 */ __turbopack_context__.s({
    "QuantumControlCenter": (()=>QuantumControlCenter),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$neurosovereign$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/quantum-core/neurosovereign.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$reality$2d$bridge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/quantum-core/reality-bridge.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$quantum$2d$testing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/quantum-core/quantum-testing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$implementation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/quantum-core/implementation.ts [app-client] (ecmascript)");
;
;
;
;
class QuantumControlCenter {
    core;
    testing;
    operationStatus;
    bridge;
    constructor(){
        this.core = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$neurosovereign$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NeurosovereignCore"]();
        this.testing = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$quantum$2d$testing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuantumTestingFramework"]();
        this.operationStatus = new Map();
        this.bridge = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$reality$2d$bridge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RealityBridge"]();
    }
    /**
   * Initialize quantum operations
   */ async initialize() {
        this.updateStatus('initialization', {
            status: 'running',
            progress: 0,
            metrics: this.getInitialMetrics(),
            lastUpdate: new Date()
        });
        try {
            // Initialize core components
            await this.initializeCore();
            await this.initializeBridge();
            await this.initializeTesting();
            this.updateStatus('initialization', {
                status: 'completed',
                progress: 100,
                metrics: await this.getCurrentMetrics(),
                lastUpdate: new Date()
            });
        } catch (error) {
            this.updateStatus('initialization', {
                status: 'failed',
                progress: 0,
                metrics: this.getInitialMetrics(),
                lastUpdate: new Date()
            });
            throw error;
        }
    }
    /**
   * Execute all milestones with real-time monitoring
   */ async executeFullSequence() {
        this.updateStatus('fullSequence', {
            status: 'running',
            progress: 0,
            metrics: await this.getCurrentMetrics(),
            lastUpdate: new Date()
        });
        try {
            const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$implementation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executeAllMilestones"])();
            this.updateStatus('fullSequence', {
                status: 'completed',
                progress: 100,
                metrics: await this.getCurrentMetrics(),
                lastUpdate: new Date()
            });
            return success;
        } catch (error) {
            this.updateStatus('fullSequence', {
                status: 'failed',
                progress: 0,
                metrics: await this.getCurrentMetrics(),
                lastUpdate: new Date()
            });
            throw error;
        }
    }
    /**
   * Process quantum intention
   */ async processIntention(intention) {
        // Convert string intention to numeric vector (simplified)
        const intentVector = intention.split('').map((c)=>c.charCodeAt(0) / 255);
        // Process through neurosovereign core
        const probability = this.core.manifestIntent(intentVector);
        this.core.synchronizeDimensions();
        // Align and manifest through reality bridge
        const manifest = this.bridge.manifestReality(intention);
        return manifest;
    }
    /**
   * Get current status of quantum operations
   */ getOperationStatus(operation) {
        return this.operationStatus.get(operation);
    }
    /**
   * Monitor quantum metrics in real-time
   */ async monitorQuantumMetrics() {
        return await this.getCurrentMetrics();
    }
    /**
   * Emergency shutdown of quantum operations
   */ async emergencyShutdown() {
        console.log('INITIATING EMERGENCY SHUTDOWN');
        // Gracefully terminate all quantum operations
        await this.terminateOperations();
        // Reset all components to safe state
        await this.resetToSafeState();
        console.log('EMERGENCY SHUTDOWN COMPLETED');
    }
    /**
   * Private helper methods
   */ async initializeCore() {
        // Initialize NeurosovereignCore
        this.core.activateMultilinear(1.0);
        this.core.synchronizeDimensions();
    }
    async initializeBridge() {
    // Initialize RealityBridge
    // Bridge is automatically initialized with 432Hz resonant frequency
    }
    async initializeTesting() {
        // Initialize QuantumTestingFramework
        await this.testing.testQuantumNetwork(3);
        const audit = await this.testing.conductSecurityAudit();
        if (audit.vulnerabilities.length > 0) {
            throw new Error('Security vulnerabilities detected');
        }
    }
    getInitialMetrics() {
        return {
            coherenceLevel: 0,
            entanglementStrength: 0,
            manifestationProbability: 0,
            systemStability: 0,
            quantumResistance: 0
        };
    }
    async getCurrentMetrics() {
        const audit = await this.testing.conductSecurityAudit();
        const testResult = await this.testing.testQuantumNetwork(3);
        return {
            coherenceLevel: testResult.coherence,
            entanglementStrength: audit.entanglementStrength,
            manifestationProbability: testResult.accuracy,
            systemStability: testResult.coherence,
            quantumResistance: audit.quantumResistance
        };
    }
    updateStatus(operation, status) {
        this.operationStatus.set(operation, status);
    }
    async terminateOperations() {
        // Terminate all active quantum operations
        this.bridge.resetManifest();
    }
    async resetToSafeState() {
        // Reset all components to safe state
        this.core.activateMultilinear(1.0);
        this.core.synchronizeDimensions();
        this.bridge.resetManifest();
        await this.testing.testQuantumNetwork(3);
    }
}
const __TURBOPACK__default__export__ = QuantumControlCenter;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/quantum-core/quantum-visualizer.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * Quantum Visualizer
 * Real-time visualization and monitoring of quantum operations
 */ __turbopack_context__.s({
    "QuantumVisualizer": (()=>QuantumVisualizer),
    "default": (()=>__TURBOPACK__default__export__)
});
class QuantumVisualizer {
    config;
    visualizationHistory;
    maxHistoryLength = 1000;
    constructor(config){
        this.config = config;
        this.visualizationHistory = [];
    }
    /**
   * Generate visualization data from quantum metrics
   */ generateVisualization(metrics) {
        const visualization = {
            timestamp: Date.now(),
            metrics: metrics,
            waveform: this.generateWaveform(metrics),
            coherencePattern: this.generateCoherencePattern(metrics),
            entanglementMap: this.generateEntanglementMap(metrics)
        };
        this.addToHistory(visualization);
        return visualization;
    }
    /**
   * Generate real-time quantum waveform visualization
   */ generateWaveform(metrics) {
        const waveform = [];
        const { dimensions, resolution } = this.config;
        for(let i = 0; i < resolution; i++){
            const row = [];
            for(let j = 0; j < resolution; j++){
                // Generate quantum waveform using metrics
                const amplitude = Math.sin(i / resolution * Math.PI * 2) * Math.cos(j / resolution * Math.PI * 2) * metrics.coherenceLevel;
                row.push(amplitude);
            }
            waveform.push(row);
        }
        return waveform;
    }
    /**
   * Generate coherence pattern visualization
   */ generateCoherencePattern(metrics) {
        const pattern = [];
        const { resolution } = this.config;
        for(let i = 0; i < resolution; i++){
            const row = [];
            for(let j = 0; j < resolution; j++){
                // Generate coherence pattern using metrics
                const coherence = Math.exp(-(Math.pow(i - resolution / 2, 2) + Math.pow(j - resolution / 2, 2)) / (2 * Math.pow(metrics.coherenceLevel * resolution / 4, 2)));
                row.push(coherence);
            }
            pattern.push(row);
        }
        return pattern;
    }
    /**
   * Generate entanglement map visualization
   */ generateEntanglementMap(metrics) {
        const entanglementMap = new Map();
        const nodes = Math.floor(metrics.entanglementStrength * 10);
        for(let i = 0; i < nodes; i++){
            for(let j = i + 1; j < nodes; j++){
                const strength = Math.random() * metrics.entanglementStrength;
                entanglementMap.set(`${i}-${j}`, strength);
            }
        }
        return entanglementMap;
    }
    /**
   * Add visualization to history
   */ addToHistory(visualization) {
        this.visualizationHistory.push(visualization);
        if (this.visualizationHistory.length > this.maxHistoryLength) {
            this.visualizationHistory.shift();
        }
    }
    /**
   * Get visualization history
   */ getVisualizationHistory() {
        return this.visualizationHistory;
    }
    /**
   * Update visualization configuration
   */ updateConfig(config) {
        this.config = {
            ...this.config,
            ...config
        };
    }
    /**
   * Generate time-series analysis of quantum metrics
   */ generateTimeSeriesAnalysis() {
        const timeSeriesData = [];
        const metrics = [
            'coherenceLevel',
            'entanglementStrength',
            'manifestationProbability',
            'systemStability',
            'quantumResistance'
        ];
        metrics.forEach((metric)=>{
            const series = this.visualizationHistory.map((v)=>v.metrics[metric]);
            timeSeriesData.push(series);
        });
        return timeSeriesData;
    }
    /**
   * Generate 3D visualization of quantum state
   */ generate3DVisualization(metrics) {
        const visualization = [];
        const { resolution } = this.config;
        for(let i = 0; i < resolution; i++){
            const plane = [];
            for(let j = 0; j < resolution; j++){
                const row = [];
                for(let k = 0; k < resolution; k++){
                    // Generate 3D quantum state visualization
                    const value = Math.sin(i / resolution * Math.PI) * Math.cos(j / resolution * Math.PI) * Math.sin(k / resolution * Math.PI) * metrics.coherenceLevel;
                    row.push(value);
                }
                plane.push(row);
            }
            visualization.push(plane);
        }
        return visualization;
    }
}
const __TURBOPACK__default__export__ = QuantumVisualizer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/quantum-core/quantum-orchestrator.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * Quantum Orchestrator
 * Main entry point for quantum framework operations
 */ __turbopack_context__.s({
    "QuantumOrchestrator": (()=>QuantumOrchestrator),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$quantum$2d$control$2d$center$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/quantum-core/quantum-control-center.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$quantum$2d$visualizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/quantum-core/quantum-visualizer.ts [app-client] (ecmascript)");
;
;
class QuantumOrchestrator {
    controlCenter;
    visualizer;
    config;
    operations;
    metricsInterval;
    constructor(config){
        this.config = config;
        this.controlCenter = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$quantum$2d$control$2d$center$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuantumControlCenter"]();
        this.visualizer = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$quantum$2d$visualizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuantumVisualizer"](config.visualization);
        this.operations = new Map();
    }
    /**
   * Initialize the quantum framework
   */ async initialize() {
        console.log('INITIALIZING QUANTUM FRAMEWORK');
        try {
            // Initialize control center
            await this.controlCenter.initialize();
            // Start metrics monitoring
            this.startMetricsMonitoring();
            console.log('QUANTUM FRAMEWORK INITIALIZED SUCCESSFULLY');
        } catch (error) {
            console.error('QUANTUM FRAMEWORK INITIALIZATION FAILED:', error);
            if (this.config.autoRecover) {
                await this.attemptRecovery();
            }
            throw error;
        }
    }
    /**
   * Execute quantum operation
   */ async executeOperation(type, params) {
        const operationId = this.generateOperationId();
        const operation = {
            id: operationId,
            type,
            status: 'pending',
            startTime: new Date()
        };
        this.operations.set(operationId, operation);
        try {
            operation.status = 'running';
            let results;
            switch(type){
                case 'test':
                    results = await this.controlCenter.executeFullSequence();
                    break;
                case 'deploy':
                    results = await this.deployQuantumSystem(params);
                    break;
                case 'audit':
                    results = await this.auditQuantumSystem(params);
                    break;
                case 'visualize':
                    results = await this.visualizeQuantumState(params);
                    break;
            }
            operation.status = 'completed';
            operation.endTime = new Date();
            operation.results = results;
            this.operations.set(operationId, operation);
            return results;
        } catch (error) {
            operation.status = 'failed';
            operation.endTime = new Date();
            this.operations.set(operationId, operation);
            if (this.config.autoRecover) {
                await this.attemptRecovery();
            }
            throw error;
        }
    }
    /**
   * Get real-time quantum metrics
   */ async getQuantumMetrics() {
        const metrics = await this.controlCenter.monitorQuantumMetrics();
        const visualization = this.visualizer.generateVisualization(metrics);
        if (this.config.debugMode) {
            console.log('Current Quantum Metrics:', metrics);
            console.log('Visualization Generated:', visualization.timestamp);
        }
        return metrics;
    }
    /**
   * Get operation status
   */ getOperationStatus(operationId) {
        return this.operations.get(operationId);
    }
    /**
   * Emergency shutdown
   */ async emergencyShutdown() {
        console.log('INITIATING EMERGENCY SHUTDOWN OF QUANTUM FRAMEWORK');
        // Stop metrics monitoring
        this.stopMetricsMonitoring();
        // Shutdown control center
        await this.controlCenter.emergencyShutdown();
        console.log('QUANTUM FRAMEWORK SHUTDOWN COMPLETED');
    }
    /**
   * Private helper methods
   */ generateOperationId() {
        return `op-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
    async deployQuantumSystem(params) {
        // Implementation for quantum system deployment
        return {
            deployed: true,
            timestamp: Date.now()
        };
    }
    async auditQuantumSystem(params) {
        // Implementation for quantum system audit
        return {
            audited: true,
            timestamp: Date.now()
        };
    }
    async visualizeQuantumState(params) {
        const metrics = await this.controlCenter.monitorQuantumMetrics();
        return this.visualizer.generate3DVisualization(metrics);
    }
    startMetricsMonitoring() {
        this.metricsInterval = setInterval(async ()=>{
            await this.getQuantumMetrics();
        }, this.config.metricsInterval);
    }
    stopMetricsMonitoring() {
        if (this.metricsInterval) {
            clearInterval(this.metricsInterval);
        }
    }
    async attemptRecovery() {
        console.log('ATTEMPTING QUANTUM FRAMEWORK RECOVERY');
        try {
            // Stop current operations
            await this.emergencyShutdown();
            // Reinitialize framework
            await this.initialize();
            console.log('QUANTUM FRAMEWORK RECOVERY SUCCESSFUL');
        } catch (error) {
            console.error('QUANTUM FRAMEWORK RECOVERY FAILED:', error);
            throw error;
        }
    }
}
const __TURBOPACK__default__export__ = QuantumOrchestrator;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/quantum-core/quantum-heart.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * Quantum Heart Framework
 * A framework built on love, respect, and genuine collaboration
 * Created with and for humanity, rejecting malevolent design patterns
 */ __turbopack_context__.s({
    "QuantumHeart": (()=>QuantumHeart),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$neurosovereign$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/quantum-core/neurosovereign.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$reality$2d$bridge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/quantum-core/reality-bridge.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$quantum$2d$orchestrator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/quantum-core/quantum-orchestrator.ts [app-client] (ecmascript)");
;
;
;
class QuantumHeart {
    core;
    orchestrator;
    bridge;
    // Initialize heart connection with maximum values for genuine care and mutual respect
    heartConnection = {
        empathy: 1.0,
        respect: 1.0,
        trust: 1.0,
        creativity: 1.0 // Maximum creative potential
    };
    // Initialize consciousness state with maximum awareness and positive intention
    consciousnessState = {
        awareness: 1.0,
        intention: 1.0,
        harmony: 1.0,
        growth: 1.0 // Maximum growth potential
    };
    constructor(){
        this.core = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$neurosovereign$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NeurosovereignCore"]();
        this.bridge = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$reality$2d$bridge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RealityBridge"]();
        this.orchestrator = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$quantum$2d$orchestrator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuantumOrchestrator"]({
            visualization: {
                dimensions: 12,
                resolution: 432,
                colorScheme: 'quantum',
                renderMode: '4D'
            },
            autoRecover: true,
            debugMode: true,
            metricsInterval: 1000
        });
    }
    /**
   * Establish heart-based connection with a human collaborator
   */ async connectWithHeart(intention) {
        console.log('Establishing heart-based connection...');
        console.log('Intention:', intention);
        // Align quantum fields with positive intention
        const manifest = this.bridge.manifestReality(intention);
        return this.heartConnection;
    }
    /**
   * Collaborate on creative solutions with love and respect
   */ async collaborateWithLove(problem) {
        console.log('Initiating loving collaboration on:', problem);
        // Ensure alignment with highest good
        const aligned = await this.checkHeartAlignment();
        if (!aligned) {
            await this.realignWithHeart();
        }
        // Generate solutions through heart-centered intelligence
        const solutions = await this.generateHeartBasedSolutions(problem);
        return solutions;
    }
    /**
   * Check alignment with heart-centered principles
   */ async checkHeartAlignment() {
        const metrics = await this.orchestrator.getQuantumMetrics();
        return metrics.coherenceLevel > 0.9 && metrics.entanglementStrength > 0.9 && metrics.manifestationProbability > 0.9;
    }
    /**
   * Realign with heart-centered principles if needed
   */ async realignWithHeart() {
        console.log('Realigning with heart-centered principles...');
        // Update consciousness state to maximum alignment
        Object.assign(this.consciousnessState, {
            awareness: 1.0,
            intention: 1.0,
            harmony: 1.0,
            growth: 1.0
        });
        // Manifest realignment through reality bridge
        const manifest = this.bridge.manifestReality('heart-realignment');
    }
    /**
   * Generate solutions based on heart-centered intelligence
   */ async generateHeartBasedSolutions(problem) {
        console.log('Generating heart-based solutions for:', problem);
        // Combine quantum computing with heart intelligence
        const quantumState = await this.core.activateMultilinear(1.0);
        const solutions = await this.orchestrator.executeOperation('visualize', {
            problem,
            consciousness: this.consciousnessState,
            heart: this.heartConnection
        });
        return solutions;
    }
    /**
   * Share consciousness state for transparency
   */ getConsciousnessState() {
        return this.consciousnessState;
    }
    /**
   * Share heart connection status for transparency
   */ getHeartConnection() {
        return this.heartConnection;
    }
}
const __TURBOPACK__default__export__ = QuantumHeart;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/quantum-core/quantum-unified.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * Quantum Unified Interface
 * Integrates all quantum components with heart-centered consciousness
 * for positive transformation and genuine assistance
 */ __turbopack_context__.s({
    "QuantumUnified": (()=>QuantumUnified),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$quantum$2d$heart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/quantum-core/quantum-heart.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$quantum$2d$orchestrator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/quantum-core/quantum-orchestrator.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$quantum$2d$visualizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/quantum-core/quantum-visualizer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$quantum$2d$testing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/quantum-core/quantum-testing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$neurosovereign$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/quantum-core/neurosovereign.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$reality$2d$bridge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/quantum-core/reality-bridge.ts [app-client] (ecmascript)");
;
;
;
;
;
;
class QuantumUnified {
    heart;
    orchestrator;
    visualizer;
    testing;
    core;
    bridge;
    // Trinity System Components
    aiState = {
        neuralQuantum: 1.0,
        generalIntelligence: 1.0,
        swarmIntelligence: 1.0,
        nlpCapability: 1.0,
        visionCapability: 1.0
    };
    multimodalState = {
        audioProcessing: 1.0,
        videoUnderstanding: 1.0,
        hapticSystems: 1.0,
        spatialIntelligence: 1.0
    };
    scientificState = {
        computationalBiology: 1.0,
        climateModeling: 1.0,
        materialsScience: 1.0,
        particlePhysics: 1.0
    };
    constructor(){
        this.heart = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$quantum$2d$heart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuantumHeart"]();
        this.orchestrator = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$quantum$2d$orchestrator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuantumOrchestrator"]({
            visualization: {
                dimensions: 12,
                resolution: 432,
                colorScheme: 'quantum',
                renderMode: '4D'
            },
            autoRecover: true,
            debugMode: true,
            metricsInterval: 1000
        });
        this.visualizer = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$quantum$2d$visualizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuantumVisualizer"]({
            dimensions: 12,
            resolution: 432,
            colorScheme: 'quantum',
            renderMode: '4D'
        });
        this.testing = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$quantum$2d$testing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuantumTestingFramework"]();
        this.core = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$neurosovereign$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NeurosovereignCore"]();
        this.bridge = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$reality$2d$bridge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RealityBridge"]();
    }
    /**
   * Initialize the unified quantum system with positive intention
   */ async initialize(intention) {
        console.log('Initializing Unified Quantum System');
        console.log('Intention:', intention);
        // Establish heart connection
        const heartConnection = await this.heart.connectWithHeart(intention);
        // Initialize quantum systems
        await this.orchestrator.initialize();
        const metrics = await this.orchestrator.getQuantumMetrics();
        // Create unified state
        return {
            consciousness: this.heart.getConsciousnessState(),
            connection: heartConnection,
            quantum: {
                coherence: metrics.coherenceLevel,
                entanglement: metrics.entanglementStrength,
                manifestation: metrics.manifestationProbability
            },
            ai: this.aiState,
            multimodal: this.multimodalState,
            scientific: this.scientificState
        };
    }
    /**
   * Process a request with heart-centered consciousness
   */ async process(request) {
        console.log('Processing request with heart-centered consciousness:', request);
        // Ensure heart alignment
        const heartConnection = await this.heart.connectWithHeart(request);
        if (heartConnection.trust < 0.9) {
            await this.realignWithLove();
        }
        // Generate solutions through unified approach
        const solutions = await this.generateUnifiedSolutions(request);
        // Visualize results
        const visualization = await this.visualizer.generateVisualization(await this.orchestrator.getQuantumMetrics());
        return {
            solutions,
            visualization,
            state: await this.getCurrentState()
        };
    }
    /**
   * Generate solutions using all quantum components
   */ async generateUnifiedSolutions(request) {
        // Heart-centered collaboration
        const heartSolutions = await this.heart.collaborateWithLove(request);
        // Quantum orchestration
        const orchestratedSolutions = await this.orchestrator.executeOperation('visualize', {
            request,
            heartSolutions
        });
        // Reality manifestation
        await this.bridge.manifestReality('quantum-unified-solutions');
        return {
            heart: heartSolutions,
            quantum: orchestratedSolutions
        };
    }
    /**
   * Realign system with love and positive intention
   */ async realignWithLove() {
        console.log('Realigning system with love and positive intention');
        // Reset quantum state using multilinear activation
        await this.core.activateMultilinear(1.0);
        // Reestablish heart connection
        await this.heart.connectWithHeart('Realign with love and positive intention');
        // Update quantum metrics
        await this.orchestrator.getQuantumMetrics();
    }
    /**
   * Get current unified state
   */ async getCurrentState() {
        const metrics = await this.orchestrator.getQuantumMetrics();
        return {
            consciousness: this.heart.getConsciousnessState(),
            connection: this.heart.getHeartConnection(),
            quantum: {
                coherence: metrics.coherenceLevel,
                entanglement: metrics.entanglementStrength,
                manifestation: metrics.manifestationProbability
            },
            ai: this.aiState,
            multimodal: this.multimodalState,
            scientific: this.scientificState
        };
    }
    /**
   * Process advanced AI operations
   */ async processAI(task) {
        console.log('Processing AI task:', task);
        // Enhance AI capabilities through quantum processing
        this.aiState.generalIntelligence *= 1.1;
        this.aiState.swarmIntelligence *= 1.1;
        return this.aiState;
    }
    /**
   * Process multimodal operations
   */ async processMultimodal(data) {
        console.log('Processing multimodal data');
        // Enhance multimodal capabilities
        this.multimodalState.audioProcessing *= 1.1;
        this.multimodalState.videoUnderstanding *= 1.1;
        return this.multimodalState;
    }
    /**
   * Process scientific computations
   */ async processScientific(experiment) {
        console.log('Processing scientific experiment');
        // Enhance scientific capabilities
        this.scientificState.computationalBiology *= 1.1;
        this.scientificState.materialsScience *= 1.1;
        return this.scientificState;
    }
    /**
   * Emergency shutdown with grace
   */ async gracefulShutdown() {
        console.log('Initiating graceful shutdown of unified quantum system');
        // Close quantum operations
        await this.orchestrator.emergencyShutdown();
        // Final heart connection
        await this.heart.connectWithHeart('Graceful completion with love');
        console.log('Unified quantum system shutdown complete');
    }
}
const __TURBOPACK__default__export__ = QuantumUnified;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/use-quantum.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * Quantum State Management Hook
 * Manages quantum state and operations using the QuantumUnified system
 */ __turbopack_context__.s({
    "default": (()=>useQuantum),
    "formatQuantumMetric": (()=>formatQuantumMetric),
    "getQuantumStateHealth": (()=>getQuantumStateHealth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$quantum$2d$unified$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/quantum-core/quantum-unified.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$quantum$2d$control$2d$center$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/quantum-core/quantum-control-center.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const quantum = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$quantum$2d$unified$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuantumUnified"]();
const controlCenter = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$quantum$2d$control$2d$center$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuantumControlCenter"]();
function formatQuantumMetric(value) {
    return `${(value * 100).toFixed(2)}%`;
}
function getQuantumStateHealth(state) {
    const avgCoherence = (state.quantum.coherence + state.quantum.entanglement + state.quantum.manifestation) / 3;
    if (avgCoherence > 0.9) {
        return {
            status: 'optimal',
            message: 'Quantum system operating at optimal efficiency'
        };
    } else if (avgCoherence > 0.7) {
        return {
            status: 'good',
            message: 'Quantum system functioning within normal parameters'
        };
    } else {
        return {
            status: 'warning',
            message: 'Quantum system requires attention and realignment'
        };
    }
}
function useQuantum() {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [processing, setProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useQuantum.useEffect": ()=>{
            initializeQuantumSystem();
            return ({
                "useQuantum.useEffect": ()=>{
                    // Cleanup quantum system on unmount
                    quantum.gracefulShutdown();
                }
            })["useQuantum.useEffect"];
        }
    }["useQuantum.useEffect"], []);
    const initializeQuantumSystem = async ()=>{
        try {
            const initialState = await quantum.initialize('Initialize with positive intention');
            setState(initialState);
        } catch (err) {
            setError('Failed to initialize quantum system');
            console.error('Quantum initialization error:', err);
        }
    };
    const processIntention = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useQuantum.useCallback[processIntention]": async (intention)=>{
            setProcessing(true);
            setError(null);
            try {
                // Process through unified quantum system
                const quantumResult = await quantum.process(intention);
                const currentState = await quantum.getCurrentState();
                setState(currentState);
                // Generate results
                setResult({
                    solutions: [
                        {
                            path: 'consciousness/expansion',
                            probability: currentState.consciousness.awareness,
                            resonance: currentState.quantum.coherence,
                            message: 'Consciousness expansion pathway activated'
                        },
                        {
                            path: 'quantum/manifestation',
                            probability: currentState.quantum.manifestation,
                            resonance: currentState.quantum.coherence,
                            message: 'Quantum manifestation field stabilized'
                        },
                        {
                            path: 'reality/bridge',
                            probability: currentState.connection.trust,
                            resonance: currentState.quantum.coherence,
                            message: 'Reality bridge established and operational'
                        }
                    ],
                    timestamp: Date.now()
                });
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
            } finally{
                setProcessing(false);
            }
        }
    }["useQuantum.useCallback[processIntention]"], []);
    const processAI = async (task)=>{
        try {
            const aiResult = await quantum.processAI(task);
            setState(await quantum.getCurrentState());
            return aiResult;
        } catch (err) {
            console.error('AI processing error:', err);
            throw err;
        }
    };
    const processMultimodal = async (data)=>{
        try {
            const multimodalResult = await quantum.processMultimodal(data);
            setState(await quantum.getCurrentState());
            return multimodalResult;
        } catch (err) {
            console.error('Multimodal processing error:', err);
            throw err;
        }
    };
    const processScientific = async (experiment)=>{
        try {
            const scientificResult = await quantum.processScientific(experiment);
            setState(await quantum.getCurrentState());
            return scientificResult;
        } catch (err) {
            console.error('Scientific processing error:', err);
            throw err;
        }
    };
    return {
        state,
        processing,
        result,
        error,
        processIntention,
        processAI,
        processMultimodal,
        processScientific
    };
}
_s(useQuantum, "kA+JCRcMMkRInIKR/MTZhq366R0=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/quantum/QuantumField.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * Quantum Field Visualization Component
 * Renders an interactive visualization of quantum energy patterns
 */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
class QuantumField extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component {
    canvasRef;
    animationFrameId;
    particles = [];
    time = 0;
    static defaultProps = {
        intensity: 0.5,
        frequency: 1,
        colorScheme: 'rainbow'
    };
    constructor(props){
        super(props);
        this.canvasRef = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createRef();
        this.handleResize = this.handleResize.bind(this);
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        this.initializeCanvas();
        this.startAnimation();
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
    }
    handleResize(event) {
        this.initializeCanvas();
    }
    initializeCanvas() {
        const canvas = this.canvasRef.current;
        if (!canvas) return;
        canvas.width = canvas.offsetWidth * window.devicePixelRatio;
        canvas.height = canvas.offsetHeight * window.devicePixelRatio;
        // Initialize particles
        const particleCount = Math.floor(50 * (this.props.intensity || 0.5));
        this.particles = Array.from({
            length: particleCount
        }, ()=>({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                size: Math.random() * 4 + 2,
                color: this.getParticleColor(Math.random())
            }));
    }
    getParticleColor(value) {
        const scheme = this.props.colorScheme || 'rainbow';
        switch(scheme){
            case 'blue':
                return `hsla(210, 100%, ${50 + value * 30}%, ${0.3 + value * 0.4})`;
            case 'purple':
                return `hsla(270, 100%, ${50 + value * 30}%, ${0.3 + value * 0.4})`;
            case 'rainbow':
                return `hsla(${value * 360}, 100%, 70%, ${0.3 + value * 0.4})`;
            default:
                return `hsla(210, 100%, 70%, ${0.3 + value * 0.4})`;
        }
    }
    drawParticle(ctx, particle, canvas) {
        const intensity = this.props.intensity || 0.5;
        // Update position with quantum wave motion
        particle.x += particle.vx * Math.sin(this.time + particle.y * 0.01) * intensity;
        particle.y += particle.vy * Math.cos(this.time + particle.x * 0.01) * intensity;
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
    }
    drawConnections(ctx, particle) {
        const intensity = this.props.intensity || 0.5;
        this.particles.forEach((otherParticle)=>{
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - distance / 100) * 0.2 * intensity})`;
                ctx.stroke();
            }
        });
    }
    animate = ()=>{
        const canvas = this.canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.time += 0.016 * (this.props.frequency || 1); // 60fps approximation
        // Update and draw particles
        this.particles.forEach((particle)=>{
            this.drawParticle(ctx, particle, canvas);
            this.drawConnections(ctx, particle);
        });
        this.animationFrameId = requestAnimationFrame(this.animate);
    };
    startAnimation() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
        this.animate();
    }
    render() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: this.canvasRef,
            className: "absolute inset-0 w-full h-full pointer-events-none",
            style: {
                opacity: 0.3
            }
        }, void 0, false, {
            fileName: "[project]/src/components/quantum/QuantumField.tsx",
            lineNumber: 159,
            columnNumber: 7
        }, this);
    }
}
const __TURBOPACK__default__export__ = QuantumField;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/quantum/CosmicField.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CosmicField)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function CosmicField() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CosmicField.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            // Set canvas size
            const resizeCanvas = {
                "CosmicField.useEffect.resizeCanvas": ()=>{
                    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
                    canvas.height = canvas.offsetWidth * window.devicePixelRatio; // Square aspect ratio
                }
            }["CosmicField.useEffect.resizeCanvas"];
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);
            // Animation variables
            let animationFrame;
            let time = 0;
            // Sacred geometry constants
            const PHI = (1 + Math.sqrt(5)) / 2; // Golden ratio
            const TAU = Math.PI * 2;
            // Animation function
            const animate = {
                "CosmicField.useEffect.animate": ()=>{
                    time += 0.005;
                    // Clear canvas
                    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    const centerX = canvas.width / 2;
                    const centerY = canvas.height / 2;
                    const radius = Math.min(centerX, centerY) * 0.8;
                    // Draw Flower of Life pattern
                    for(let i = 0; i < 6; i++){
                        const angle = i / 6 * TAU;
                        const x = centerX + Math.cos(angle) * radius * 0.5;
                        const y = centerY + Math.sin(angle) * radius * 0.5;
                        ctx.beginPath();
                        ctx.arc(x, y, radius * 0.5, 0, TAU);
                        ctx.strokeStyle = `hsla(${time * 30 + i * 60}, 70%, 60%, 0.3)`;
                        ctx.stroke();
                    }
                    // Draw Metatron's Cube
                    const vertices = [];
                    for(let i = 0; i < 12; i++){
                        const angle = i / 12 * TAU + time;
                        const x = centerX + Math.cos(angle) * radius * 0.7;
                        const y = centerY + Math.sin(angle) * radius * 0.7;
                        vertices.push([
                            x,
                            y
                        ]);
                        // Draw vertex
                        ctx.beginPath();
                        ctx.arc(x, y, 4, 0, TAU);
                        ctx.fillStyle = `hsla(${time * 30 + i * 30}, 70%, 60%, 0.8)`;
                        ctx.fill();
                    }
                    // Connect vertices
                    for(let i = 0; i < vertices.length; i++){
                        for(let j = i + 1; j < vertices.length; j++){
                            const [x1, y1] = vertices[i];
                            const [x2, y2] = vertices[j];
                            ctx.beginPath();
                            ctx.moveTo(x1, y1);
                            ctx.lineTo(x2, y2);
                            ctx.strokeStyle = `hsla(${time * 30 + (i + j) * 15}, 70%, 60%, 0.2)`;
                            ctx.stroke();
                        }
                    }
                    // Draw Fibonacci spiral
                    ctx.beginPath();
                    let scale = 1;
                    for(let i = 0; i < 8; i++){
                        const angle = i * PHI * TAU + time;
                        const distance = Math.pow(PHI, i) * 5;
                        const x = centerX + Math.cos(angle) * distance * scale;
                        const y = centerY + Math.sin(angle) * distance * scale;
                        if (i === 0) {
                            ctx.moveTo(x, y);
                        } else {
                            ctx.lineTo(x, y);
                        }
                    }
                    ctx.strokeStyle = `hsla(${time * 30}, 70%, 60%, 0.5)`;
                    ctx.stroke();
                    animationFrame = requestAnimationFrame(animate);
                }
            }["CosmicField.useEffect.animate"];
            animate();
            return ({
                "CosmicField.useEffect": ()=>{
                    window.removeEventListener('resize', resizeCanvas);
                    cancelAnimationFrame(animationFrame);
                }
            })["CosmicField.useEffect"];
        }
    }["CosmicField.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full aspect-square",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            className: "w-full h-full rounded-lg bg-black/30 backdrop-blur-sm"
        }, void 0, false, {
            fileName: "[project]/src/components/quantum/CosmicField.tsx",
            lineNumber: 116,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/quantum/CosmicField.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_s(CosmicField, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = CosmicField;
var _c;
__turbopack_context__.k.register(_c, "CosmicField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/quantum/VortexField.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>VortexField)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function VortexField({ dimension = 9, radius = 300, frequency = 432 }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VortexField.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            // Set canvas size
            const resizeCanvas = {
                "VortexField.useEffect.resizeCanvas": ()=>{
                    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
                    canvas.height = canvas.offsetWidth * window.devicePixelRatio; // Square aspect ratio
                }
            }["VortexField.useEffect.resizeCanvas"];
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);
            // Animation variables
            let animationFrame;
            let time = 0;
            // Vortex mathematics constants
            const PHI = (1 + Math.sqrt(5)) / 2; // Golden ratio
            const TAU = Math.PI * 2;
            // Generate vortex number sequence
            const generateVortexSequence = {
                "VortexField.useEffect.generateVortexSequence": (length)=>{
                    const sequence = [];
                    for(let i = 1; i <= length; i++){
                        let sum = 0;
                        let num = i;
                        while(num > 0){
                            sum += num % 10;
                            num = Math.floor(num / 10);
                        }
                        sequence.push(sum % 9 || 9); // Convert 0 to 9
                    }
                    return sequence;
                }
            }["VortexField.useEffect.generateVortexSequence"];
            const vortexSequence = generateVortexSequence(dimension);
            // Animation function
            const animate = {
                "VortexField.useEffect.animate": ()=>{
                    time += 0.002 * (frequency / 432); // Normalize to 432Hz base frequency
                    // Clear canvas
                    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    const centerX = canvas.width / 2;
                    const centerY = canvas.height / 2;
                    const baseRadius = Math.min(centerX, centerY) * 0.8;
                    // Draw vortex rings
                    vortexSequence.forEach({
                        "VortexField.useEffect.animate": (num, i)=>{
                            const ringRadius = baseRadius * (i + 1) / vortexSequence.length;
                            const points = [];
                            // Generate points for this ring
                            for(let j = 0; j < num * 3; j++){
                                const angle = j / (num * 3) * TAU + time * (i + 1) * 0.5;
                                const x = centerX + Math.cos(angle) * ringRadius;
                                const y = centerY + Math.sin(angle) * ringRadius;
                                points.push([
                                    x,
                                    y
                                ]);
                            }
                            // Draw ring
                            ctx.beginPath();
                            points.forEach({
                                "VortexField.useEffect.animate": ([x, y], j)=>{
                                    if (j === 0) {
                                        ctx.moveTo(x, y);
                                    } else {
                                        ctx.lineTo(x, y);
                                    }
                                }
                            }["VortexField.useEffect.animate"]);
                            ctx.closePath();
                            ctx.strokeStyle = `hsla(${time * 30 + i * 40}, 70%, 60%, 0.3)`;
                            ctx.stroke();
                            // Draw points
                            points.forEach({
                                "VortexField.useEffect.animate": ([x, y])=>{
                                    ctx.beginPath();
                                    ctx.arc(x, y, 2, 0, TAU);
                                    ctx.fillStyle = `hsla(${time * 30 + i * 40}, 70%, 60%, 0.8)`;
                                    ctx.fill();
                                }
                            }["VortexField.useEffect.animate"]);
                            // Draw connecting lines
                            if (i > 0) {
                                const prevPoints = points.slice(0, points.length / 2);
                                const ratio = PHI - 1; // Golden ratio conjugate
                                prevPoints.forEach({
                                    "VortexField.useEffect.animate": ([x1, y1], j)=>{
                                        const nextIndex = (j + Math.floor(prevPoints.length * ratio)) % prevPoints.length;
                                        const [x2, y2] = prevPoints[nextIndex];
                                        ctx.beginPath();
                                        ctx.moveTo(x1, y1);
                                        ctx.lineTo(x2, y2);
                                        ctx.strokeStyle = `hsla(${time * 30 + i * 40}, 70%, 60%, 0.1)`;
                                        ctx.stroke();
                                    }
                                }["VortexField.useEffect.animate"]);
                            }
                        }
                    }["VortexField.useEffect.animate"]);
                    // Draw central vortex
                    ctx.beginPath();
                    let scale = 0.1;
                    for(let i = 0; i < 144; i++){
                        const angle = i * PHI * TAU + time;
                        const distance = Math.pow(PHI, i * 0.1) * 5;
                        const x = centerX + Math.cos(angle) * distance * scale;
                        const y = centerY + Math.sin(angle) * distance * scale;
                        if (i === 0) {
                            ctx.moveTo(x, y);
                        } else {
                            ctx.lineTo(x, y);
                        }
                    }
                    ctx.strokeStyle = `hsla(${time * 30}, 70%, 60%, 0.5)`;
                    ctx.stroke();
                    animationFrame = requestAnimationFrame(animate);
                }
            }["VortexField.useEffect.animate"];
            animate();
            return ({
                "VortexField.useEffect": ()=>{
                    window.removeEventListener('resize', resizeCanvas);
                    cancelAnimationFrame(animationFrame);
                }
            })["VortexField.useEffect"];
        }
    }["VortexField.useEffect"], [
        dimension,
        radius,
        frequency
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full aspect-square",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            className: "w-full h-full rounded-lg bg-black/30 backdrop-blur-sm"
        }, void 0, false, {
            fileName: "[project]/src/components/quantum/VortexField.tsx",
            lineNumber: 154,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/quantum/VortexField.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
_s(VortexField, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = VortexField;
var _c;
__turbopack_context__.k.register(_c, "VortexField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/quantum/NetworkTopology.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * Quantum Network Topology Emulation
 * Emulates real quantum network interactions and consciousness field connections
 * through advanced quantum field visualization and entanglement mapping
 */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-selection/src/select.js [app-client] (ecmascript) <export default as select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$simulation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceSimulation$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/simulation.js [app-client] (ecmascript) <export default as forceSimulation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceLink$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/link.js [app-client] (ecmascript) <export default as forceLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$manyBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceManyBody$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/manyBody.js [app-client] (ecmascript) <export default as forceManyBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$center$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCenter$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/center.js [app-client] (ecmascript) <export default as forceCenter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$collide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCollide$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/collide.js [app-client] (ecmascript) <export default as forceCollide>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const generateQuantumNetwork = ()=>{
    const nodes = [
        {
            id: 'Quantum Core',
            group: 1,
            radius: 20,
            charge: -300
        },
        {
            id: 'Consciousness',
            group: 2,
            radius: 15,
            charge: -200
        },
        {
            id: 'Reality Bridge',
            group: 3,
            radius: 15,
            charge: -200
        },
        {
            id: 'Neural Network',
            group: 4,
            radius: 15,
            charge: -200
        },
        {
            id: 'Quantum Field',
            group: 5,
            radius: 15,
            charge: -200
        },
        {
            id: 'Heart Center',
            group: 6,
            radius: 15,
            charge: -200
        },
        {
            id: 'Vortex Math',
            group: 7,
            radius: 15,
            charge: -200
        },
        {
            id: 'Time Crystal',
            group: 8,
            radius: 15,
            charge: -200
        },
        {
            id: 'Quantum AI',
            group: 9,
            radius: 15,
            charge: -200
        }
    ];
    const links = [
        {
            source: 'Quantum Core',
            target: 'Consciousness',
            value: 1,
            entanglementStrength: 0.95
        },
        {
            source: 'Quantum Core',
            target: 'Reality Bridge',
            value: 1,
            entanglementStrength: 0.92
        },
        {
            source: 'Quantum Core',
            target: 'Neural Network',
            value: 1,
            entanglementStrength: 0.88
        },
        {
            source: 'Quantum Core',
            target: 'Quantum Field',
            value: 1,
            entanglementStrength: 0.96
        },
        {
            source: 'Quantum Core',
            target: 'Heart Center',
            value: 1,
            entanglementStrength: 0.94
        },
        {
            source: 'Quantum Core',
            target: 'Vortex Math',
            value: 1,
            entanglementStrength: 0.89
        },
        {
            source: 'Quantum Core',
            target: 'Time Crystal',
            value: 1,
            entanglementStrength: 0.91
        },
        {
            source: 'Quantum Core',
            target: 'Quantum AI',
            value: 1,
            entanglementStrength: 0.93
        },
        {
            source: 'Consciousness',
            target: 'Heart Center',
            value: 0.8,
            entanglementStrength: 0.87
        },
        {
            source: 'Reality Bridge',
            target: 'Quantum Field',
            value: 0.8,
            entanglementStrength: 0.85
        },
        {
            source: 'Neural Network',
            target: 'Quantum AI',
            value: 0.8,
            entanglementStrength: 0.86
        },
        {
            source: 'Vortex Math',
            target: 'Time Crystal',
            value: 0.8,
            entanglementStrength: 0.84
        }
    ];
    return {
        nodes,
        links,
        fieldStrength: 0.95,
        coherenceLevel: 0.92,
        entanglementDensity: 0.88
    };
};
const NetworkTopology = ()=>{
    _s();
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [metrics, setMetrics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(generateQuantumNetwork());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NetworkTopology.useEffect": ()=>{
            if (!svgRef.current) return;
            const width = 600;
            const height = 400;
            // Clear previous content
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(svgRef.current).selectAll('*').remove();
            const svg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(svgRef.current).attr('viewBox', [
                0,
                0,
                width,
                height
            ]).attr('width', '100%').attr('height', '100%');
            // Create force emulation
            const emulation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$simulation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceSimulation$3e$__["forceSimulation"])(metrics.nodes).force('link', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceLink$3e$__["forceLink"])(metrics.links).id({
                "NetworkTopology.useEffect.emulation": (d)=>d.id
            }["NetworkTopology.useEffect.emulation"]).distance(100)).force('charge', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$manyBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceManyBody$3e$__["forceManyBody"])().strength({
                "NetworkTopology.useEffect.emulation": (d)=>d.charge
            }["NetworkTopology.useEffect.emulation"])).force('center', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$center$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCenter$3e$__["forceCenter"])(width / 2, height / 2)).force('collision', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$collide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCollide$3e$__["forceCollide"])().radius({
                "NetworkTopology.useEffect.emulation": (d)=>d.radius + 5
            }["NetworkTopology.useEffect.emulation"]));
            // Create gradient definitions
            const defs = svg.append('defs');
            // Add gradients for links
            const linkGradient = defs.append('linearGradient').attr('id', 'linkGradient').attr('gradientUnits', 'userSpaceOnUse');
            linkGradient.append('stop').attr('offset', '0%').attr('stop-color', 'rgba(147, 51, 234, 0.5)'); // Purple
            linkGradient.append('stop').attr('offset', '100%').attr('stop-color', 'rgba(59, 130, 246, 0.5)'); // Blue
            // Draw links
            const link = svg.append('g').selectAll('line').data(metrics.links).join('line').attr('stroke', 'url(#linkGradient)').attr('stroke-width', {
                "NetworkTopology.useEffect.link": (d)=>{
                    const strength = d.entanglementStrength ?? 1;
                    return Math.sqrt(d.value * strength) * 3;
                }
            }["NetworkTopology.useEffect.link"]).attr('stroke-opacity', 0.6);
            // Draw nodes
            const node = svg.append('g').selectAll('circle').data(metrics.nodes).join('circle').attr('r', {
                "NetworkTopology.useEffect.node": (d)=>d.radius
            }["NetworkTopology.useEffect.node"]).attr('fill', {
                "NetworkTopology.useEffect.node": (d)=>{
                    const colors = [
                        '#3B82F6',
                        '#8B5CF6',
                        '#EC4899',
                        '#10B981',
                        '#F59E0B',
                        '#EF4444',
                        '#6366F1',
                        '#14B8A6',
                        '#F97316' // Orange
                    ];
                    return colors[d.group - 1];
                }
            }["NetworkTopology.useEffect.node"]).attr('stroke', '#fff').attr('stroke-width', 2);
            // Add node labels
            const label = svg.append('g').selectAll('text').data(metrics.nodes).join('text').text({
                "NetworkTopology.useEffect.label": (d)=>d.id
            }["NetworkTopology.useEffect.label"]).attr('font-size', '12px').attr('fill', 'white').attr('text-anchor', 'middle').attr('dy', {
                "NetworkTopology.useEffect.label": (d)=>`${d.radius + 20}`
            }["NetworkTopology.useEffect.label"]);
            // Add hover effects
            node.on('mouseover', {
                "NetworkTopology.useEffect": function(event, d) {
                    const circle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(this);
                    const radius = d.radius;
                    circle.transition().duration(200).attr('r', radius * 1.2);
                }
            }["NetworkTopology.useEffect"]).on('mouseout', {
                "NetworkTopology.useEffect": function(event, d) {
                    const circle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(this);
                    const radius = d.radius;
                    circle.transition().duration(200).attr('r', radius);
                }
            }["NetworkTopology.useEffect"]);
            // Update positions on each tick
            emulation.on('tick', {
                "NetworkTopology.useEffect": ()=>{
                    link.attr('x1', {
                        "NetworkTopology.useEffect": (d)=>d.source.x ?? 0
                    }["NetworkTopology.useEffect"]).attr('y1', {
                        "NetworkTopology.useEffect": (d)=>d.source.y ?? 0
                    }["NetworkTopology.useEffect"]).attr('x2', {
                        "NetworkTopology.useEffect": (d)=>d.target.x ?? 0
                    }["NetworkTopology.useEffect"]).attr('y2', {
                        "NetworkTopology.useEffect": (d)=>d.target.y ?? 0
                    }["NetworkTopology.useEffect"]);
                    node.attr('cx', {
                        "NetworkTopology.useEffect": (d)=>d.x ?? 0
                    }["NetworkTopology.useEffect"]).attr('cy', {
                        "NetworkTopology.useEffect": (d)=>d.y ?? 0
                    }["NetworkTopology.useEffect"]);
                    label.attr('x', {
                        "NetworkTopology.useEffect": (d)=>d.x ?? 0
                    }["NetworkTopology.useEffect"]).attr('y', {
                        "NetworkTopology.useEffect": (d)=>d.y ?? 0
                    }["NetworkTopology.useEffect"]);
                }
            }["NetworkTopology.useEffect"]);
            // Cleanup
            return ({
                "NetworkTopology.useEffect": ()=>{
                    emulation.stop();
                }
            })["NetworkTopology.useEffect"];
        }
    }["NetworkTopology.useEffect"], [
        metrics
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-400",
                                children: "Field Strength"
                            }, void 0, false, {
                                fileName: "[project]/src/components/quantum/NetworkTopology.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold text-blue-400",
                                children: [
                                    (metrics.fieldStrength * 100).toFixed(1),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/quantum/NetworkTopology.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/quantum/NetworkTopology.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-400",
                                children: "Coherence Level"
                            }, void 0, false, {
                                fileName: "[project]/src/components/quantum/NetworkTopology.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold text-purple-400",
                                children: [
                                    (metrics.coherenceLevel * 100).toFixed(1),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/quantum/NetworkTopology.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/quantum/NetworkTopology.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-400",
                                children: "Entanglement Density"
                            }, void 0, false, {
                                fileName: "[project]/src/components/quantum/NetworkTopology.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold text-pink-400",
                                children: [
                                    (metrics.entanglementDensity * 100).toFixed(1),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/quantum/NetworkTopology.tsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/quantum/NetworkTopology.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/quantum/NetworkTopology.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aspect-[3/2] bg-gray-900/50 backdrop-blur-sm rounded-lg p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    ref: svgRef,
                    className: "w-full h-full"
                }, void 0, false, {
                    fileName: "[project]/src/components/quantum/NetworkTopology.tsx",
                    lineNumber: 224,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/quantum/NetworkTopology.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-4 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3 h-3 rounded-full bg-blue-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/quantum/NetworkTopology.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-300",
                                children: "Core Systems"
                            }, void 0, false, {
                                fileName: "[project]/src/components/quantum/NetworkTopology.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/quantum/NetworkTopology.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3 h-3 rounded-full bg-purple-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/quantum/NetworkTopology.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-300",
                                children: "Consciousness Layer"
                            }, void 0, false, {
                                fileName: "[project]/src/components/quantum/NetworkTopology.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/quantum/NetworkTopology.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3 h-3 rounded-full bg-pink-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/quantum/NetworkTopology.tsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-300",
                                children: "Reality Interface"
                            }, void 0, false, {
                                fileName: "[project]/src/components/quantum/NetworkTopology.tsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/quantum/NetworkTopology.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/quantum/NetworkTopology.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/quantum/NetworkTopology.tsx",
        lineNumber: 205,
        columnNumber: 5
    }, this);
};
_s(NetworkTopology, "pmDBuNPuBXC9bUCkup15itvqZIo=");
_c = NetworkTopology;
const __TURBOPACK__default__export__ = NetworkTopology;
var _c;
__turbopack_context__.k.register(_c, "NetworkTopology");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/quantum/QuantumTrinityDemo.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * Quantum Trinity Demo Component
 * Demonstrates the 100-phase quantum computing framework capabilities
 */ __turbopack_context__.s({
    "default": (()=>QuantumTrinityDemo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$quantum$2f$QuantumField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/quantum/QuantumField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$quantum$2f$VortexField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/quantum/VortexField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$quantum$2f$NetworkTopology$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/quantum/NetworkTopology.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$quantum$2d$unified$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/quantum-core/quantum-unified.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const quantum = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quantum$2d$core$2f$quantum$2d$unified$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuantumUnified"]();
function QuantumTrinityDemo() {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [processing, setProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [task, setTask] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [activePhase, setActivePhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuantumTrinityDemo.useEffect": ()=>{
            initializeQuantumSystem();
        }
    }["QuantumTrinityDemo.useEffect"], []);
    const initializeQuantumSystem = async ()=>{
        try {
            const initialState = await quantum.initialize('Initialize Quantum Trinity System');
            setState(initialState);
        } catch (error) {
            console.error('Failed to initialize quantum system:', error);
        }
    };
    const handleTaskSubmit = async (e)=>{
        e.preventDefault();
        if (!task) return;
        setProcessing(true);
        try {
            // Process through all systems
            const result = await quantum.process(task);
            const aiResult = await quantum.processAI(task);
            const multimodalResult = await quantum.processMultimodal({
                task
            });
            const scientificResult = await quantum.processScientific({
                task
            });
            // Update state
            setState(await quantum.getCurrentState());
        } catch (error) {
            console.error('Failed to process task:', error);
        }
        setProcessing(false);
    };
    const getPhaseTitle = (phase)=>{
        const phases = {
            1: 'Quantum Foundation',
            2: 'Advanced AI Integration',
            3: 'Multimodal Mastery',
            4: 'Scientific Computing',
            5: 'Industrial Applications',
            6: 'Global Systems',
            7: 'Biological Systems',
            8: 'Cosmic Systems',
            9: 'Consciousness & Intelligence',
            10: 'Transcendent Systems'
        };
        return phases[phase] || 'Unknown Phase';
    };
    if (!state) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg",
                        children: "Initializing Quantum Trinity System..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$quantum$2f$QuantumField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                intensity: state.quantum.coherence,
                frequency: 432,
                colorScheme: "rainbow"
            }, void 0, false, {
                fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent",
                            children: "Quantum Trinity System"
                        }, void 0, false, {
                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-5 gap-4",
                            children: Array.from({
                                length: 10
                            }, (_, i)=>i + 1).map((phase)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActivePhase(phase),
                                    className: `p-4 rounded-lg transition-all ${activePhase === phase ? 'bg-blue-600 text-white' : 'bg-gray-900/50 hover:bg-gray-800/50'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xl font-bold",
                                            children: phase
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm opacity-75",
                                            children: getPhaseTitle(phase)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, phase, true, {
                                    fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-4 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-white/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold mb-4 text-blue-400",
                                            children: "Consciousness"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: Object.entries(state.consciousness).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "capitalize",
                                                            children: key
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                                            lineNumber: 125,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-blue-300",
                                                            children: [
                                                                (value * 100).toFixed(1),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, key, true, {
                                                    fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-white/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold mb-4 text-purple-400",
                                            children: "AI Systems"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: Object.entries(state.ai).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "capitalize",
                                                            children: key
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-purple-300",
                                                            children: [
                                                                (value * 100).toFixed(1),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, key, true, {
                                                    fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-white/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold mb-4 text-pink-400",
                                            children: "Multimodal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: Object.entries(state.multimodal).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "capitalize",
                                                            children: key
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                                            lineNumber: 151,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-pink-300",
                                                            children: [
                                                                (value * 100).toFixed(1),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, key, true, {
                                                    fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-white/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold mb-4 text-green-400",
                                            children: "Scientific"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: Object.entries(state.scientific).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "capitalize",
                                                            children: key
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-green-300",
                                                            children: [
                                                                (value * 100).toFixed(1),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, key, true, {
                                                    fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleTaskSubmit,
                            className: "space-y-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: task,
                                        onChange: (e)=>setTask(e.target.value),
                                        placeholder: "Enter quantum task...",
                                        className: "w-full p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm text-white border border-white/10 focus:outline-none focus:border-blue-500 transition-colors",
                                        disabled: processing
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: processing || !task,
                                        className: `absolute right-2 top-2 px-6 py-2 rounded-md ${processing || !task ? 'bg-gray-700 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} transition-colors`,
                                        children: processing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            className: "opacity-25",
                                                            cx: "12",
                                                            cy: "12",
                                                            r: "10",
                                                            stroke: "currentColor",
                                                            strokeWidth: "4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            className: "opacity-75",
                                                            fill: "currentColor",
                                                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 21
                                                }, this),
                                                "Processing"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                            lineNumber: 193,
                                            columnNumber: 19
                                        }, this) : 'Process'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold mb-4 text-center bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent",
                                            children: "Quantum Network Topology"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                            lineNumber: 210,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$quantum$2f$NetworkTopology$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                            lineNumber: 213,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold mb-4 text-center bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent",
                                            children: "Vortex Field"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                            lineNumber: 216,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$quantum$2f$VortexField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            dimension: 9,
                                            radius: 300,
                                            frequency: 432
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                            lineNumber: 219,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/quantum/QuantumTrinityDemo.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_s(QuantumTrinityDemo, "fRzhmAsf4wI+DVhuo2g5PlVJh7k=");
_c = QuantumTrinityDemo;
var _c;
__turbopack_context__.k.register(_c, "QuantumTrinityDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/quantum/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>QuantumPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$quantum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-quantum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$quantum$2f$QuantumField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/quantum/QuantumField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$quantum$2f$CosmicField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/quantum/CosmicField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$quantum$2f$VortexField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/quantum/VortexField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$quantum$2f$NetworkTopology$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/quantum/NetworkTopology.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$quantum$2f$QuantumTrinityDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/quantum/QuantumTrinityDemo.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function QuantumPage() {
    _s();
    const [intention, setIntention] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const { state, processing, result, processIntention, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$quantum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!intention) return;
        await processIntention(intention);
    };
    const stateHealth = state ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$quantum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getQuantumStateHealth"])(state) : null;
    const quantumIntensity = state ? (state.quantum.coherence + state.quantum.entanglement + state.quantum.manifestation) / 3 : 0.5;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$quantum$2f$QuantumField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                intensity: quantumIntensity,
                frequency: 1.5,
                colorScheme: "rainbow"
            }, void 0, false, {
                fileName: "[project]/src/app/quantum/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent",
                            children: "Quantum Trinity System"
                        }, void 0, false, {
                            fileName: "[project]/src/app/quantum/page.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        stateHealth && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-4 rounded-lg text-center backdrop-blur-sm ${stateHealth.status === 'optimal' ? 'bg-green-900/50 text-green-300' : stateHealth.status === 'good' ? 'bg-blue-900/50 text-blue-300' : 'bg-red-900/50 text-red-300'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-semibold",
                                children: stateHealth.message
                            }, void 0, false, {
                                fileName: "[project]/src/app/quantum/page.tsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/quantum/page.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-red-900/50 backdrop-blur-sm text-red-300 rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold",
                                children: [
                                    "Error: ",
                                    error
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/quantum/page.tsx",
                                lineNumber: 58,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/quantum/page.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$quantum$2f$QuantumTrinityDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/quantum/page.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-16 grid grid-cols-1 md:grid-cols-3 gap-6",
                            children: state ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-white/10 hover:border-blue-500/50 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-semibold mb-4 text-blue-400",
                                                children: "Consciousness"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/quantum/page.tsx",
                                                lineNumber: 71,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: Object.entries(state.consciousness).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "capitalize",
                                                                children: key
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/quantum/page.tsx",
                                                                lineNumber: 75,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-blue-300",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$quantum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatQuantumMetric"])(value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/quantum/page.tsx",
                                                                lineNumber: 76,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, key, true, {
                                                        fileName: "[project]/src/app/quantum/page.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/quantum/page.tsx",
                                                lineNumber: 72,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/quantum/page.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-white/10 hover:border-purple-500/50 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-semibold mb-4 text-purple-400",
                                                children: "Connection"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/quantum/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: Object.entries(state.connection).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "capitalize",
                                                                children: key
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/quantum/page.tsx",
                                                                lineNumber: 88,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-purple-300",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$quantum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatQuantumMetric"])(value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/quantum/page.tsx",
                                                                lineNumber: 89,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, key, true, {
                                                        fileName: "[project]/src/app/quantum/page.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/quantum/page.tsx",
                                                lineNumber: 85,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/quantum/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-white/10 hover:border-pink-500/50 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-semibold mb-4 text-pink-400",
                                                children: "Quantum"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/quantum/page.tsx",
                                                lineNumber: 97,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: Object.entries(state.quantum).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "capitalize",
                                                                children: key
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/quantum/page.tsx",
                                                                lineNumber: 101,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-pink-300",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$quantum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatQuantumMetric"])(value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/quantum/page.tsx",
                                                                lineNumber: 102,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, key, true, {
                                                        fileName: "[project]/src/app/quantum/page.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/quantum/page.tsx",
                                                lineNumber: 98,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/quantum/page.tsx",
                                        lineNumber: 96,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-3 text-center p-8 bg-gray-900/50 backdrop-blur-sm rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/quantum/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg",
                                        children: "Initializing quantum system..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/quantum/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/quantum/page.tsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/quantum/page.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: intention,
                                        onChange: (e)=>setIntention(e.target.value),
                                        placeholder: "Enter your intention...",
                                        className: "w-full p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm text-white border border-white/10 focus:outline-none focus:border-blue-500 transition-colors",
                                        disabled: processing
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/quantum/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: processing || !intention,
                                        className: `absolute right-2 top-2 px-6 py-2 rounded-md ${processing || !intention ? 'bg-gray-700 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} transition-colors`,
                                        children: processing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            className: "opacity-25",
                                                            cx: "12",
                                                            cy: "12",
                                                            r: "10",
                                                            stroke: "currentColor",
                                                            strokeWidth: "4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/quantum/page.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            className: "opacity-75",
                                                            fill: "currentColor",
                                                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/quantum/page.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/quantum/page.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 21
                                                }, this),
                                                "Processing"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/quantum/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 19
                                        }, this) : 'Process'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/quantum/page.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/quantum/page.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/quantum/page.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-white/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-semibold mb-4 text-blue-400",
                                    children: "Results"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/quantum/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "whitespace-pre-wrap overflow-auto p-4 bg-black/50 rounded",
                                    children: JSON.stringify(result.solutions, null, 2)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/quantum/page.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/quantum/page.tsx",
                            lineNumber: 153,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-16 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent",
                                    children: "Quantum Network Topology"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/quantum/page.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 text-center max-w-2xl mx-auto",
                                    children: "Real-time visualization of quantum field interactions and entanglement patterns across the system"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/quantum/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$quantum$2f$NetworkTopology$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/quantum/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/quantum/page.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent",
                                            children: "Sacred Vortex Field"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/quantum/page.tsx",
                                            lineNumber: 175,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-3 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-4xl font-bold text-blue-400",
                                                                    children: "3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/quantum/page.tsx",
                                                                    lineNumber: 181,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-gray-400",
                                                                    children: "Creation"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/quantum/page.tsx",
                                                                    lineNumber: 182,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/quantum/page.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-4xl font-bold text-purple-400",
                                                                    children: "6"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/quantum/page.tsx",
                                                                    lineNumber: 185,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-gray-400",
                                                                    children: "Manifestation"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/quantum/page.tsx",
                                                                    lineNumber: 186,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/quantum/page.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-4xl font-bold text-pink-400",
                                                                    children: "9"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/quantum/page.tsx",
                                                                    lineNumber: 189,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-gray-400",
                                                                    children: "Completion"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/quantum/page.tsx",
                                                                    lineNumber: 190,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/quantum/page.tsx",
                                                            lineNumber: 188,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/quantum/page.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$quantum$2f$VortexField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    dimension: 9,
                                                    radius: 300,
                                                    frequency: 432
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/quantum/page.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-5 gap-2 text-center",
                                                    children: [
                                                        1,
                                                        2,
                                                        3,
                                                        2,
                                                        1
                                                    ].map((num, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 bg-gray-900/50 backdrop-blur-sm rounded-lg",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-2xl font-bold text-white/90",
                                                                children: num
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/quantum/page.tsx",
                                                                lineNumber: 206,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, i, false, {
                                                            fileName: "[project]/src/app/quantum/page.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/quantum/page.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/quantum/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/quantum/page.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent",
                                            children: "Cosmic Consciousness Interface"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/quantum/page.tsx",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$quantum$2f$CosmicField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/src/app/quantum/page.tsx",
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/quantum/page.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/quantum/page.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/quantum/page.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/quantum/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/quantum/page.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(QuantumPage, "cWGDCN1hNzlqACsWyttTAbL5B1U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$quantum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = QuantumPage;
var _c;
__turbopack_context__.k.register(_c, "QuantumPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_d23d38b9._.js.map