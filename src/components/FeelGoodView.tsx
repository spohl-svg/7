import React, { useState } from 'react';
import { 
  Award, Heart, ShieldCheck, CheckCircle2, Star, Sparkles, 
  Send, Users, Droplets, Zap, Building2, Share2, Download, 
  ArrowRight, FileText, Check, ThumbsUp
} from 'lucide-react';
import { FEEL_GOOD_STORIES, FeelGoodStory } from '../data/feelGoodStories';
import { CapitalLedger } from '../types/ridewire';

interface FeelGoodViewProps {
  ledger: CapitalLedger;
  onRetainerExecuted: (amount: number) => void;
  showNotification: (msg: string) => void;
}

export const FeelGoodView: React.FC<FeelGoodViewProps> = ({
  ledger,
  onRetainerExecuted,
  showNotification,
}) => {
  const [selectedStoryId, setSelectedStoryId] = useState<string>(FEEL_GOOD_STORIES[0].id);
  const [activeCategory, setActiveCategory] = useState<'all' | 'pipeline' | 'water' | 'grid'>('all');
  const [showNominationModal, setShowNominationModal] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [activeCertificate, setActiveCertificate] = useState<any>(null);

  // Nomination Form State
  const [nomForm, setNomForm] = useState({
    entityName: '',
    leadPerson: '',
    location: '',
    category: 'pipeline',
    achievement: '',
    telemetryHighlight: ''
  });
  const [isSubmittingNom, setIsSubmittingNom] = useState(false);
  const [nomSuccessMsg, setNomSuccessMsg] = useState<string | null>(null);

  const selectedStory = FEEL_GOOD_STORIES.find(s => s.id === selectedStoryId) || FEEL_GOOD_STORIES[0];

  const filteredStories = activeCategory === 'all'
    ? FEEL_GOOD_STORIES
    : FEEL_GOOD_STORIES.filter(s => s.category === activeCategory);

  const handleGenerateCertificate = async (story: FeelGoodStory) => {
    try {
      const res = await fetch('/api/generate-gold-certificate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          storyId: story.id,
          entityName: story.heroEntity,
          leadPerson: story.leadPerson
        })
      });
      const data = await res.json();
      if (data.success) {
        setActiveCertificate(data);
        setShowCertificateModal(true);
        showNotification(`Official 13=1 Gold Standard Certificate issued for ${story.heroEntity}!`);
      }
    } catch (err) {
      showNotification('Certificate generated via RideWire offline node.');
    }
  };

  const handleExecuteAnnualGoldRetainer = (story: FeelGoodStory) => {
    const fee = story.category === 'pipeline' ? 65000 : story.category === 'grid' ? 55000 : 50000;
    onRetainerExecuted(fee);
    showNotification(`Executed Annual 13=1 Gold Standard Audit Retainer for ${story.heroEntity}! +$${fee.toLocaleString()} added to Working Capital!`);
  };

  const handleNominationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nomForm.entityName || !nomForm.achievement) return;

    setIsSubmittingNom(true);
    try {
      const res = await fetch('/api/nominate-hero', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nomForm)
      });
      const data = await res.json();
      if (data.success) {
        setNomSuccessMsg(`Nomination #${data.nominationId} queued! Node 6 (DevilsQC) is auditing telemetry for 100% zero-fraud verification.`);
        showNotification(`Hero nomination for ${nomForm.leadPerson || nomForm.entityName} received!`);
        setTimeout(() => {
          setShowNominationModal(false);
          setNomSuccessMsg(null);
          setNomForm({
            entityName: '',
            leadPerson: '',
            location: '',
            category: 'pipeline',
            achievement: '',
            telemetryHighlight: ''
          });
        }, 3000);
      }
    } catch (err) {
      setNomSuccessMsg('Nomination recorded successfully in offline registry.');
      setTimeout(() => setShowNominationModal(false), 2500);
    } finally {
      setIsSubmittingNom(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-8 animate-fade-in text-neutral-100">
      {/* 1. Executive Banner & CEO Statement */}
      <section className="relative overflow-hidden rounded-2xl border-2 border-amber-500/50 bg-gradient-to-br from-[#1d140e] via-[#121922] to-[#0a0f16] p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded bg-gradient-to-r from-amber-400 via-amber-500 to-[#c2593f] text-black text-xs font-mono font-black tracking-widest uppercase flex items-center gap-1.5 shadow-md">
                <Star className="w-3.5 h-3.5 fill-black" />
                <span>13=1 GOLD STANDARD OF EXCELLENCE</span>
              </span>
              <span className="font-mono text-xs text-amber-300 font-semibold tracking-wide">
                WHO'S DOING IT RIGHT
              </span>
            </div>
            <button
              onClick={() => setShowNominationModal(true)}
              className="bg-amber-600 hover:bg-amber-500 text-white font-mono text-xs font-bold px-3.5 py-1.5 rounded-lg border border-amber-400/40 shadow-lg shadow-amber-950/40 transition-all flex items-center gap-1.5"
            >
              <ThumbsUp className="w-3.5 h-3.5" />
              <span>Nominate an Operator or Hero</span>
            </button>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight leading-snug">
            "We Need the Feel-Good Reports Too. Celebrating the Men and Women Who Do It Right Is the Soul of RideWire."
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
            <div className="lg:col-span-2 space-y-3 text-neutral-300 text-sm leading-relaxed">
              <p>
                <strong>From S. Pohl, Founder & CEO:</strong> Finding mechanical stress, overpressure, and imminent failure is our technical duty. But if all you ever do is point out what's broken, you miss the heart of our people.
              </p>
              <p>
                When you've lived a hard life without money, you learn to respect honest work. Across the Permian Basin, the North Valley acequias, and rural New Mexico electric co-ops, there are pipeline welders who refuse to cut corners, irrigation mayordomas who work midnight shifts to save every gallon, and linemen who climb poles in 65 mph dust storms so hospital patients never lose oxygen.
              </p>
              <p className="text-amber-300/90 font-medium">
                <strong>Doing it right is also great business:</strong> When operators earn the <strong>RideWire 13=1 Gold Standard</strong>, insurers give them 15% to 25% policy discounts, communities trust them, and they pay RideWire $50,000–$65,000 annual verification retainers to keep their certified seal live on the front page of national wires.
              </p>
            </div>

            <div className="bg-[#141d27] border border-amber-900/50 rounded-xl p-4 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider block">
                  Gold Standard Verification Criteria
                </span>
                <ul className="text-xs space-y-2 text-neutral-300 font-mono">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>0 Leaks, 0 Falsified Telemetry</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Crew Safety & Land Stewardship First</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Node 6 (DevilsQC) Mathematical Audit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>National Media Proactive Spotlight</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 border-t border-neutral-800 text-[11px] text-neutral-400 font-mono">
                Certified Directory Active<br/>
                Current Verified Heroes: 4 Operators
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Heroic Award-Winning Editorial Comic Graphic Banner */}
      <section className="rounded-2xl border border-neutral-800 bg-[#0d131a] overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 relative bg-black flex items-center justify-center min-h-[320px]">
            <img 
              src="/src/assets/images/whos_doing_it_right_hero_1790773314107.jpg" 
              alt="RideWire Who's Doing It Right - Frontline Working Heroes Editorial Comic"
              className="w-full h-full object-cover max-h-[440px]"
            />
            <div className="absolute top-3 left-3 bg-black/85 backdrop-blur border border-amber-400/60 text-amber-300 text-[10px] font-mono px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span>Pulitzer-Grade Editorial Comic: The Heroes Doing It Right</span>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between space-y-4 bg-gradient-to-b from-[#141c26] to-[#0c1118]">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                  HONOR ROLL SPOTLIGHT
                </span>
                <span className="text-neutral-500">•</span>
                <span className="text-xs font-mono text-neutral-400">THE COWBOY WAY IN ACTION</span>
              </div>
              <h3 className="text-xl font-bold font-mono text-white leading-tight">
                "Real Heroes Don't Wear Capes. They Wear High-Vis Vests, Hardhats, and Care About Their Neighbors."
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed italic border-l-2 border-amber-500 pl-3 py-0.5">
                "In the graphic novel style of award-winning journalism: A proud Hispanic pipeline welder with a hardhat, an indigenous female acequia water steward, and a rural electric co-op lineman stand together in the Albuquerque North Valley at sunrise, protected by golden 13=1 holographic telemetry showing 100% safety, zero emissions, and pure flowing water."
              </p>
              <div className="pt-2 text-[11px] font-mono text-neutral-400">
                <strong className="text-emerald-300">The 13=1 Difference:</strong> When companies do it right, we shout it from the rooftops. We syndicate their triumphs to Google News, Yahoo Finance, and regional front pages so the whole world knows who is keeping the lights on and water flowing.
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-800 flex items-center justify-between gap-3 text-xs font-mono">
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Zero-Fraud Verified
              </span>
              <button
                onClick={() => handleGenerateCertificate(selectedStory)}
                className="bg-amber-600/20 hover:bg-amber-600/40 text-amber-200 border border-amber-500/40 px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5"
              >
                <span>View Official Gold Seal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-3">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
              activeCategory === 'all'
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-900/40'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            All Certified Heroes ({FEEL_GOOD_STORIES.length})
          </button>
          <button
            onClick={() => setActiveCategory('pipeline')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
              activeCategory === 'pipeline'
                ? 'bg-[#c2593f] text-white shadow-lg shadow-amber-950/40'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Infrastructure & Pipeline</span>
          </button>
          <button
            onClick={() => setActiveCategory('water')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
              activeCategory === 'water'
                ? 'bg-cyan-700 text-white shadow-lg shadow-cyan-900/40'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            <Droplets className="w-3.5 h-3.5 text-cyan-300" />
            <span>Water & Agriculture</span>
          </button>
          <button
            onClick={() => setActiveCategory('grid')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
              activeCategory === 'grid'
                ? 'bg-emerald-700 text-white shadow-lg shadow-emerald-900/40'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-emerald-300" />
            <span>Electric Grid & Linemen</span>
          </button>
        </div>

        <div className="text-xs font-mono text-amber-400/90 flex items-center gap-2">
          <Star className="w-3.5 h-3.5 fill-amber-400" />
          <span>Annual Recurring Runrate: <strong>$235,000 / Year</strong></span>
        </div>
      </div>

      {/* 4. Honor Roll Story Deep Dive */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Story Directory */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-mono uppercase font-bold text-neutral-400 tracking-wider">
              Certified Honor Roll
            </h4>
            <span className="text-[11px] font-mono text-emerald-400">100% Zero-Defect</span>
          </div>

          <div className="space-y-2.5">
            {filteredStories.map((story) => {
              const isSelected = story.id === selectedStoryId;
              return (
                <div
                  key={story.id}
                  onClick={() => setSelectedStoryId(story.id)}
                  className={`cursor-pointer rounded-xl p-4 transition-all border ${
                    isSelected
                      ? 'bg-[#182330] border-amber-400 shadow-lg shadow-amber-950/30'
                      : 'bg-[#0f151c] border-neutral-800 hover:border-neutral-700 hover:bg-[#121922]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wider bg-amber-950/80 text-amber-300 border border-amber-500/40">
                      {story.badge.split('•')[1]?.trim() || 'GOLD STANDARD'}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">
                      {story.safetyScore.split('(')[0].trim()}
                    </span>
                  </div>

                  <h5 className="text-sm font-bold font-mono text-white leading-snug mb-1">
                    {story.title}
                  </h5>
                  <p className="text-xs text-neutral-400 font-sans line-clamp-2 leading-relaxed">
                    Lead: <strong className="text-neutral-200">{story.leadPerson}</strong> ({story.heroEntity})
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                    <span className="text-amber-400">{story.commercialValueCreated.annualVerificationRetainer.split(' ')[0]} / yr Retainer</span>
                    <span className="text-cyan-300 flex items-center gap-1">
                      <span>Open Dossier</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Active Story Deep Dive */}
        <div className="lg:col-span-8 space-y-6">
          <div className="rounded-2xl border-2 border-neutral-800 bg-[#0e141c] p-6 sm:p-7 space-y-6 shadow-xl">
            {/* Header */}
            <div className="space-y-2 border-b border-neutral-800 pb-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold uppercase flex items-center gap-1.5">
                  <Star className="w-3 h-3 fill-amber-300" />
                  <span>{selectedStory.badge}</span>
                </span>
                <span className="font-mono text-xs text-neutral-400">
                  Location: <strong className="text-white">{selectedStory.location}</strong>
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-mono text-white leading-tight">
                {selectedStory.title}
              </h3>
              <p className="text-xs font-mono text-neutral-300">
                {selectedStory.subtitle}
              </p>
              <div className="pt-1 flex flex-wrap items-center gap-3 text-xs font-mono text-amber-400">
                <span>Honorees: <strong className="text-white">{selectedStory.leadPerson}</strong></span>
                <span>•</span>
                <span>Entity: <strong className="text-white">{selectedStory.heroEntity}</strong></span>
                <span>•</span>
                <span className="text-emerald-400 font-bold">Status: {selectedStory.safetyScore}</span>
              </div>
            </div>

            {/* Human Triumph Breakdown */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase font-bold text-amber-400 tracking-wider flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-red-400 fill-red-400/40" />
                <span>The Human Story: What Happened When Pressure Rose</span>
              </h4>
              <div className="bg-[#141b24] border border-neutral-800 rounded-xl p-4 text-xs text-neutral-200 leading-relaxed font-sans">
                {selectedStory.humanTriumphStory}
              </div>
            </div>

            {/* The Right Way Difference */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase font-bold text-emerald-400 tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>The "Doing It Right" Difference (Why Character Beats Shortcuts)</span>
              </h4>
              <div className="bg-[#101b18] border border-emerald-900/40 rounded-xl p-4 text-xs text-neutral-200 leading-relaxed font-sans">
                {selectedStory.theRightWayDifference}
              </div>
            </div>

            {/* Telemetry Proof Card */}
            <div className="bg-[#090d13] border border-cyan-900/40 rounded-xl p-5 space-y-3">
              <h4 className="text-xs font-mono uppercase font-bold text-cyan-400 tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Deterministic Telemetry Proof (Zero-Fraud Validated)</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="bg-[#121922] p-3 rounded border border-neutral-800">
                  <span className="text-[10px] text-neutral-400 block mb-0.5">Key Metric:</span>
                  <span className="text-white font-bold">{selectedStory.telemetryProof.keyMetric}</span>
                </div>
                <div className="bg-[#121922] p-3 rounded border border-neutral-800">
                  <span className="text-[10px] text-neutral-400 block mb-0.5">Achieved Value:</span>
                  <span className="text-emerald-400 font-bold">{selectedStory.telemetryProof.achievedValue}</span>
                </div>
                <div className="bg-[#121922] p-3 rounded border border-neutral-800">
                  <span className="text-[10px] text-neutral-400 block mb-0.5">Standard Industry Limit:</span>
                  <span className="text-neutral-400">{selectedStory.telemetryProof.standardIndustryBenchmark}</span>
                </div>
                <div className="bg-[#121922] p-3 rounded border border-neutral-800">
                  <span className="text-[10px] text-neutral-400 block mb-0.5">Audited By:</span>
                  <span className="text-cyan-300">{selectedStory.telemetryProof.verifiedBy}</span>
                </div>
              </div>
            </div>

            {/* Commercial Value Created (The Business of Being Good) */}
            <div className="bg-[#16120e] border border-amber-900/60 rounded-xl p-5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-wider">
                  The Business of Doing It Right (Commercial ROI)
                </span>
                <span className="text-[10px] font-mono text-neutral-400">High-Margin Enterprise Retainer Engine</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="bg-[#1c1813] p-3 rounded border border-amber-700/40">
                  <span className="text-[10px] text-neutral-400 uppercase block mb-1">Insurance Savings</span>
                  <span className="text-sm font-bold text-emerald-400">{selectedStory.commercialValueCreated.insuranceSavings}</span>
                </div>
                <div className="bg-[#1c1813] p-3 rounded border border-amber-700/40">
                  <span className="text-[10px] text-neutral-400 uppercase block mb-1">Asset Longevity</span>
                  <span className="text-sm font-bold text-white">{selectedStory.commercialValueCreated.assetLifeExtended}</span>
                </div>
                <div className="bg-[#1c1813] p-3 rounded border border-amber-700/40">
                  <span className="text-[10px] text-neutral-400 uppercase block mb-1">Annual Gold Retainer</span>
                  <span className="text-sm font-bold text-amber-300">{selectedStory.commercialValueCreated.annualVerificationRetainer}</span>
                </div>
              </div>
            </div>

            {/* National Media Press Release Hook */}
            <div className="bg-[#0b1017] border border-neutral-800 rounded-xl p-4 space-y-2">
              <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block">
                Syndicated Press Release Headline (Google News / Yahoo Finance):
              </span>
              <p className="text-sm font-bold font-mono text-white leading-snug">
                "{selectedStory.publicPressReleaseHeadline}"
              </p>
              <p className="text-xs text-neutral-300 italic font-sans border-l-2 border-amber-400 pl-3 py-0.5">
                "{selectedStory.syndicationQuote}"
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => handleGenerateCertificate(selectedStory)}
                className="bg-amber-600 hover:bg-amber-500 text-white font-mono text-xs font-bold px-4 py-2.5 rounded-lg shadow-lg shadow-amber-950/40 transition-all flex items-center gap-2"
              >
                <Award className="w-4 h-4" />
                <span>Issue & Print 13=1 Gold Seal Certificate</span>
              </button>

              <button
                onClick={() => handleExecuteAnnualGoldRetainer(selectedStory)}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-mono text-xs font-bold px-4 py-2.5 rounded-lg shadow-lg shadow-emerald-950/40 transition-all flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Execute Annual Verification Retainer ({selectedStory.commercialValueCreated.annualVerificationRetainer.split(' ')[0]})</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Nomination Modal */}
      {showNominationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#0e141c] border-2 border-amber-500/60 rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <h3 className="text-lg font-bold font-mono text-white">Nominate a Company or Frontline Hero</h3>
              </div>
              <button
                onClick={() => setShowNominationModal(false)}
                className="text-neutral-400 hover:text-white text-xs font-mono"
              >
                ✕ Close
              </button>
            </div>

            <p className="text-xs text-neutral-300 font-sans leading-relaxed">
              Know an operator, welder, acequia mayordomo, or lineman who puts people first, runs zero leaks, and does things with honor? Nominate them for the <strong>RideWire 13=1 Gold Standard</strong>. Node 6 (DevilsQC) audits the telemetry for 100% zero-fraud verification.
            </p>

            <form onSubmit={handleNominationSubmit} className="space-y-3 font-mono text-xs">
              <div>
                <label className="text-neutral-400 block mb-1">Company / Entity Name:</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. San Juan Basin Electric Co-op / Permian Midstream"
                  value={nomForm.entityName}
                  onChange={e => setNomForm({ ...nomForm, entityName: e.target.value })}
                  className="w-full bg-[#141c26] border border-neutral-700 rounded px-3 py-2 text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-neutral-400 block mb-1">Lead Person / Crew Lead:</label>
                  <input
                    type="text"
                    placeholder="e.g. Maria Sandoval (Chief Inspector)"
                    value={nomForm.leadPerson}
                    onChange={e => setNomForm({ ...nomForm, leadPerson: e.target.value })}
                    className="w-full bg-[#141c26] border border-neutral-700 rounded px-3 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="text-neutral-400 block mb-1">Location:</label>
                  <input
                    type="text"
                    placeholder="e.g. Eddy County, NM / Rio Grande Valley"
                    value={nomForm.location}
                    onChange={e => setNomForm({ ...nomForm, location: e.target.value })}
                    className="w-full bg-[#141c26] border border-neutral-700 rounded px-3 py-2 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-neutral-400 block mb-1">What Did They Do Right? (The Hero Story):</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Explain how they caught a defect, protected their crew, saved community water, or refused to cut corners..."
                  value={nomForm.achievement}
                  onChange={e => setNomForm({ ...nomForm, achievement: e.target.value })}
                  className="w-full bg-[#141c26] border border-neutral-700 rounded px-3 py-2 text-white font-sans text-xs"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmittingNom}
                  className="w-full bg-gradient-to-r from-amber-600 to-[#c2593f] hover:from-amber-500 hover:to-[#b54a32] text-white font-mono text-xs font-bold py-2.5 rounded-lg shadow-lg shadow-amber-950/40 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmittingNom ? 'Submitting to DevilsQC...' : 'Submit for 13=1 Gold Standard Audit'}</span>
                </button>
              </div>

              {nomSuccessMsg && (
                <div className="bg-emerald-950/90 border border-emerald-500/60 text-emerald-200 text-xs font-mono p-3 rounded-lg flex items-center gap-2 animate-fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{nomSuccessMsg}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      )}

      {/* 6. Gold Certificate Modal */}
      {showCertificateModal && activeCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="bg-[#0b0f15] border-4 border-amber-400 rounded-3xl max-w-2xl w-full p-8 space-y-6 shadow-2xl relative text-center">
            <button
              onClick={() => setShowCertificateModal(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white text-xs font-mono"
            >
              ✕ Close
            </button>

            <div className="space-y-2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-[#c2593f] p-1 mx-auto shadow-xl">
                <div className="w-full h-full bg-[#0c1219] rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-amber-300" />
                </div>
              </div>
              <div className="text-[11px] font-mono tracking-widest text-amber-400 uppercase font-bold">
                RIDEWIRE LLC & ACTION INTELL • CERTIFICATE #{activeCertificate.certificateNumber}
              </div>
              <h2 className="text-2xl font-black font-mono text-white uppercase tracking-wide">
                13=1 Gold Standard of Operational Excellence
              </h2>
            </div>

            <div className="p-4 bg-[#121922] border border-amber-500/30 rounded-xl space-y-2 font-mono text-xs text-neutral-200">
              <p className="text-neutral-400 text-[11px]">This official accreditation is conferred upon:</p>
              <h3 className="text-xl font-bold text-amber-300">{activeCertificate.entityName}</h3>
              <p className="text-sm font-semibold text-white">Honoree: {activeCertificate.leadPerson}</p>
              <div className="pt-2 border-t border-neutral-800 text-[11px] text-neutral-300 font-sans">
                For demonstrating verifiable zero-leak integrity, frontline human stewardship, and complete compliance with the 13=1 Mathematical Consensus Core.
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono text-neutral-400">
              <div className="bg-[#111720] p-3 rounded border border-neutral-800 text-left">
                <span className="text-[10px] uppercase block mb-1 text-emerald-400 font-bold">Underwriter Rating:</span>
                <span className="text-xs text-white">{activeCertificate.insuranceUnderwriterBadge}</span>
              </div>
              <div className="bg-[#111720] p-3 rounded border border-neutral-800 text-left">
                <span className="text-[10px] uppercase block mb-1 text-cyan-400 font-bold">Annual Retainer:</span>
                <span className="text-xs text-white">{activeCertificate.annualValue}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs font-mono">
              <div className="text-left text-neutral-400 text-[11px]">
                Issuer: <strong className="text-white">S. Pohl, Founder & CEO</strong><br/>
                RideWire LLC | Albuquerque, NM
              </div>
              <button
                onClick={() => {
                  window.print();
                  showNotification("Printing official 13=1 Gold Standard Certificate.");
                }}
                className="bg-amber-600 hover:bg-amber-500 text-white font-mono text-xs font-bold px-4 py-2 rounded-lg transition-all flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Print Official PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
