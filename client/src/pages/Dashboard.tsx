import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Package, MessageSquare, GraduationCap, Plus, ArrowLeft } from 'lucide-react';
import Navbar, { type NavItem } from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AuroraBackground from '../components/visual/AuroraBackground';
import PlansList from '../components/dashboard/PlansList';
import ConversationalPlanner from '../components/lesson-plan/ConversationalPlanner';
import MaterialGenerator from '../components/materials/MaterialGenerator';
import ReflectionModule from '../components/reflection/ReflectionModule';
import TrailsList from '../components/trails/TrailsList';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('plans');
  const [creatingPlan, setCreatingPlan] = useState(false);

  const tabs: NavItem[] = [
    { id: 'plans', label: 'Meus Planos', icon: <FileText className="w-4 h-4" /> },
    { id: 'materials', label: 'Materiais', icon: <Package className="w-4 h-4" /> },
    { id: 'reflections', label: 'Reflexões', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'trails', label: 'Trilhas', icon: <GraduationCap className="w-4 h-4" /> },
  ];

  const handleNewPlan = () => {
    setCreatingPlan(true);
    setActiveTab('plans');
  };

  const handleSelectTab = (id: string) => {
    setCreatingPlan(false);
    setActiveTab(id);
  };

  return (
    <div className="relative flex min-h-screen flex-col">
      <AuroraBackground />
      <Navbar items={tabs} activeId={creatingPlan ? '' : activeTab} onSelect={handleSelectTab} />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-10 pt-28">
        <AnimatePresence mode="wait">
          {creatingPlan ? (
            <motion.div
              key="creating"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                onClick={() => setCreatingPlan(false)}
                className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 transition-colors hover:text-brand-800"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar ao painel
              </button>
              <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-bold text-ink">
                <Plus className="h-5 w-5 text-brand-600" />
                Novo Plano de Aula
              </h2>
              <ConversationalPlanner onPlanSaved={() => setCreatingPlan(false)} />
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-3xl p-2 shadow-glass sm:p-3"
            >
              <div className="rounded-[1.25rem] bg-white/70 p-5 sm:p-6">
                {activeTab === 'plans' && <PlansList onNewPlan={handleNewPlan} />}
                {activeTab === 'materials' && <MaterialGenerator />}
                {activeTab === 'reflections' && <ReflectionModule />}
                {activeTab === 'trails' && <TrailsList />}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
