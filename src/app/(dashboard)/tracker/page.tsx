"use client";

import { useState, useEffect, useTransition } from "react";
import {
  Heart,
  Sparkles,
  Droplets,
  Zap,
  Plus,
  Calendar,
  X,
  History,
  Trash2,
  Edit,
  Loader2,
} from "lucide-react";
import {
  getPeriodLogsAction,
  createPeriodLogAction,
  updatePeriodLogAction,
  deletePeriodLogAction,
  PeriodLogInput,
  PeriodLogRecord,
} from "../../../lib/actions/periodActions"; // Adjust this path to match your project structure



export default function PeriodTrackerPage() {
  const [logs, setLogs] = useState<PeriodLogRecord[]>([]);
  const [history, setHistory] = useState<PeriodLogRecord | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [isLoadingLogs, setIsLoadingLogs] = useState(true);
  const [isPending, startTransition] = useTransition();

  // Modal Form state
  const [formData, setFormData] = useState<PeriodLogInput>({
    startDate: new Date().toISOString().split("T")[0],
    cycleLength: 28,
    periodDuration: 5,
    flowLevel: "MEDIUM",
  });

  // Daily Logging State
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  // 1. Fetch initial period logs from Express server
  const fetchLogs = async () => {
    setIsLoadingLogs(true);
    const res = await getPeriodLogsAction();

    if (res.success && Array.isArray(res.data) && res.data.length > 0) {
      setLogs(res.data);
      setHistory(res.data[0]); // Most recent log
    } else {
      setLogs([]);
      setHistory(null);
    }
    setIsLoadingLogs(false);
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  // Sync selected symptoms if history changes
  useEffect(() => {
    if (history?.symptoms) {
      setSelectedSymptoms(history.symptoms);
    }
  }, [history]);

  // Calculate insights if history exists
  const lastDate = history ? new Date(history.startDate) : new Date();
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - lastDate.getTime());
  const currentCycleDay = history
    ? Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    : 0;

  const nextPeriodDate = new Date(lastDate);
  if (history?.cycleLength)
    nextPeriodDate.setDate(lastDate.getDate() + history.cycleLength);

  const ovulationDate = new Date(nextPeriodDate);
  if (history?.cycleLength)
    ovulationDate.setDate(nextPeriodDate.getDate() - 14);

  const getCyclePhase = () => {
    if (!history)
      return { name: "No Data", badge: "bg-slate-100 text-slate-600" };
    const cycleLen = history.cycleLength || 28;
    const duration = history.periodDuration || 5;

    if (currentCycleDay <= duration)
      return { name: "Menstrual Phase", badge: "bg-rose-100 text-rose-700" };
    if (currentCycleDay < cycleLen - 14)
      return { name: "Follicular Phase", badge: "bg-pink-100 text-pink-700" };
    if (currentCycleDay >= cycleLen - 15 && currentCycleDay <= cycleLen - 12)
      return {
        name: "Ovulation Phase",
        badge: "bg-purple-100 text-purple-700",
      };
    return { name: "Luteal Phase", badge: "bg-amber-100 text-amber-700" };
  };

  const currentPhase = getCyclePhase();

  // 2. Open Modal for Create
  const handleOpenCreateModal = () => {
    setEditingId(null);
    setFormData({
      startDate: new Date().toISOString().split("T")[0],
      cycleLength: 28,
      periodDuration: 5,
      flowLevel: "MEDIUM",
    });
    setIsModalOpen(true);
  };

  // 3. Open Modal for Edit
  const handleOpenEditModal = (log: PeriodLogRecord) => {
    setEditingId(log.id);
    setFormData({
      startDate: new Date(log.startDate).toISOString().split("T")[0],
      cycleLength: log.cycleLength || 28,
      periodDuration: log.periodDuration || 5,
      flowLevel: log.flowLevel || "MEDIUM",
      notes: log.notes || "",
    });
    setIsModalOpen(true);
  };

  // 4. Save History (CREATE or UPDATE via serverMutate)
  const handleSaveHistory = (e: React.FormEvent) => {
    e.preventDefault();

    startTransition(async () => {
      let res;
      if (editingId) {
        res = await updatePeriodLogAction(editingId, {
          ...formData,
          symptoms: selectedSymptoms,
        });
      } else {
        res = await createPeriodLogAction({
          ...formData,
          symptoms: selectedSymptoms,
        });
      }

      if (res.success) {
        setIsModalOpen(false);
        await fetchLogs();
      } else {
        alert(res.error || "Failed to save period history.");
      }
    });
  };

  // 5. DELETE Log
  const handleDeleteLog = (id: string) => {
    if (!confirm("Are you sure you want to delete this log?")) return;

    startTransition(async () => {
      const res = await deletePeriodLogAction(id);
      if (res.success) {
        await fetchLogs();
      } else {
        alert(res.error || "Failed to delete log.");
      }
    });
  };

  // 6. Toggle Daily Symptom Mutation
  const toggleSymptom = (symptom: string) => {
    const updatedSymptoms = selectedSymptoms.includes(symptom)
      ? selectedSymptoms.filter((s) => s !== symptom)
      : [...selectedSymptoms, symptom];

    setSelectedSymptoms(updatedSymptoms);

    if (history) {
      startTransition(async () => {
        await updatePeriodLogAction(history.id, {
          symptoms: updatedSymptoms,
        });
      });
    }
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-12">
      {/* 1. HERO HEADER */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-rose-500 via-pink-500 to-[#C01C5C] p-8 text-white shadow-lg shadow-pink-200/50">
        <div className="relative z-10 max-w-2xl space-y-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1 text-xs font-semibold backdrop-blur-md">
            <Heart className="h-3.5 w-3.5 fill-white" /> Menstrual Health
            Tracker
          </span>
          <h1 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            Cycle & Health Insights
          </h1>
          <p className="text-sm font-medium text-pink-100 leading-relaxed">
            Keep track of your cycle phases, log daily symptoms, and receive
            personalized health guidance.
          </p>
        </div>
      </div>

      {/* LOADING STATE */}
      {isLoadingLogs && (
        <div className="p-12 text-center rounded-3xl bg-white border border-pink-100 shadow-sm flex items-center justify-center gap-3 text-slate-500 font-bold">
          <Loader2 className="h-6 w-6 animate-spin text-[#C01C5C]" /> Loading
          period data...
        </div>
      )}

      {/* 2. NO HISTORY ALERT BANNER */}
      {!isLoadingLogs && !history && (
        <div className="rounded-3xl bg-rose-50 border-2 border-rose-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3.5 bg-rose-500 text-white rounded-2xl shadow-md shrink-0">
              <History className="h-7 w-7" />
            </div>
            <div className="space-y-1">
              <h3 className="font-extrabold text-lg text-slate-800">
                Please add your last period history
              </h3>
              <p className="text-xs font-medium text-slate-600 max-w-lg">
                To generate your personalized cycle wheel, phase predictions,
                and health tips, we need your last period details.
              </p>
            </div>
          </div>
          <button
            onClick={handleOpenCreateModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#C01C5C] hover:bg-pink-700 text-white font-bold text-sm shadow-md transition-all shrink-0"
          >
            <Plus className="h-4 w-4" /> Add Period History
          </button>
        </div>
      )}

      {/* 3. MAIN DASHBOARD CONTENT */}
      {!isLoadingLogs && history && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT 2 COLUMNS: Cycle Status */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-3xl bg-white p-6 sm:p-8 border border-pink-100 shadow-sm space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-heading text-xl font-bold text-slate-800">
                    Cycle Overview
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Calculated from your logged period history
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs font-bold px-3 py-1.5 rounded-full ${currentPhase.badge}`}
                  >
                    {currentPhase.name}
                  </span>
                  <button
                    onClick={() => handleOpenEditModal(history)}
                    className="text-xs font-bold text-[#C01C5C] hover:underline flex items-center gap-1"
                  >
                    <Edit className="h-3.5 w-3.5" /> Edit History
                  </button>
                </div>
              </div>

              {/* CYCLE VISUALIZER */}
              <div className="flex flex-col sm:flex-row items-center justify-around gap-6 py-2">
                <div className="relative flex items-center justify-center w-48 h-48 rounded-full border-8 border-pink-100 bg-gradient-to-br from-rose-50 to-pink-50 shadow-inner">
                  <div className="text-center space-y-1">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Day
                    </p>
                    <p className="text-4xl font-extrabold text-[#C01C5C]">
                      {currentCycleDay}
                    </p>
                    <p className="text-xs font-semibold text-slate-500">
                      of {history.cycleLength} days
                    </p>
                  </div>
                </div>

                {/* STATS BREAKDOWN */}
                <div className="space-y-4 w-full sm:w-auto">
                  <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="p-2.5 bg-rose-500 text-white rounded-xl">
                      <Droplets className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-400 uppercase">
                        Next Period Expected
                      </p>
                      <p className="text-sm font-extrabold text-slate-800">
                        {nextPeriodDate.toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="p-2.5 bg-purple-600 text-white rounded-xl">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-400 uppercase">
                        Approx. Ovulation
                      </p>
                      <p className="text-sm font-extrabold text-slate-800">
                        {ovulationDate.toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SYMPTOMS & MOOD LOGGING */}
            <div className="rounded-3xl bg-white p-6 sm:p-8 border border-pink-100 shadow-sm space-y-6">
              <h3 className="font-heading text-lg font-bold text-slate-800">
                Log Today's Symptoms
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Cramps",
                  "Headache",
                  "Fatigue",
                  "Bloating",
                  "Acne",
                  "Cravings",
                ].map((symptom) => {
                  const active = selectedSymptoms.includes(symptom);
                  return (
                    <button
                      key={symptom}
                      disabled={isPending}
                      onClick={() => toggleSymptom(symptom)}
                      className={`p-3 rounded-2xl text-xs font-bold transition-all ${
                        active
                          ? "bg-rose-500 text-white shadow-sm"
                          : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {symptom}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Insights & Logs History */}
          <div className="space-y-6">
            <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider">
                <Zap className="h-4 w-4" /> Phase Insights
              </div>
              <h3 className="font-bold text-lg">{currentPhase.name}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Stay updated with your daily phase changes and hydration goals.
              </p>
            </div>

            {/* LOG HISTORY LIST */}
            <div className="rounded-3xl bg-white p-6 border border-pink-100 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-800 text-sm">
                  Log History
                </h3>
                <button
                  onClick={handleOpenCreateModal}
                  className="text-xs font-bold text-[#C01C5C] hover:underline"
                >
                  + Add New
                </button>
              </div>

              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {logs.map((log) => (
                  <div
                    key={log.id}
                    className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs"
                  >
                    <div>
                      <p className="font-bold text-slate-800">
                        {new Date(log.startDate).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                      <p className="text-[10px] text-slate-500">
                        {log.flowLevel} Flow • {log.periodDuration || 5} Days
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleOpenEditModal(log)}
                        className="p-1.5 text-slate-400 hover:text-slate-700"
                      >
                        <Edit className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteLog(log.id)}
                        disabled={isPending}
                        className="p-1.5 text-rose-400 hover:text-rose-600"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. MODAL TO ADD / EDIT PERIOD HISTORY */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-pink-100 space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2 text-[#C01C5C]">
                <Calendar className="h-5 w-5" />
                <h3 className="font-heading font-extrabold text-lg text-slate-800">
                  {editingId ? "Edit Period History" : "Add Period History"}
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSaveHistory} className="space-y-4">
              {/* Start Date */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  When did your period start?
                </label>
                <input
                  type="date"
                  required
                  value={formData.startDate}
                  onChange={(e) =>
                    setFormData({ ...formData, startDate: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                />
              </div>

              {/* Cycle Length */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Average Cycle Length ({formData.cycleLength} Days)
                </label>
                <input
                  type="range"
                  min="21"
                  max="35"
                  value={formData.cycleLength}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      cycleLength: Number(e.target.value),
                    })
                  }
                  className="w-full accent-[#C01C5C]"
                />
                <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-1">
                  <span>21 Days</span>
                  <span>28 Days</span>
                  <span>35 Days</span>
                </div>
              </div>

              {/* Period Duration */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  How many days does your period last?
                </label>
                <input
                  type="number"
                  min="2"
                  max="10"
                  value={formData.periodDuration}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      periodDuration: Number(e.target.value),
                    })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                />
              </div>

              {/* Flow Level */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Flow Level
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(["LIGHT", "MEDIUM", "HEAVY"] as const).map((level) => (
                    <button
                      type="button"
                      key={level}
                      onClick={() =>
                        setFormData({ ...formData, flowLevel: level })
                      }
                      className={`py-2 rounded-xl text-xs font-bold transition-all ${
                        formData.flowLevel === level
                          ? "bg-[#C01C5C] text-white shadow-sm"
                          : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isPending}
                  className="px-5 py-2.5 rounded-xl bg-[#C01C5C] hover:bg-pink-700 text-white text-xs font-bold shadow-md transition-all flex items-center gap-2 disabled:opacity-50"
                >
                  {isPending && (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  )}
                  {editingId ? "Update History" : "Save History"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
