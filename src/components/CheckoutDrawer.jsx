import React, { useState } from 'react';
import { 
  X, 
  Check, 
  ShieldCheck, 
  Lock, 
  Tag, 
  CreditCard, 
  Sparkles, 
  ArrowRight,
  Download,
  CheckCircle2
} from 'lucide-react';

export default function CheckoutDrawer({ isOpen, onClose, selectedCourse }) {
  const [couponCode, setCouponCode] = useState('PIXELPRO');
  const [appliedDiscount, setAppliedDiscount] = useState(0.40); // 40% off with PIXELPRO
  const [couponStatus, setCouponStatus] = useState({ applied: true, message: 'PIXELPRO applied: 40% OFF!' });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form states
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const course = selectedCourse || {
    title: 'All-Access Master Pass',
    price: 149
  };

  const basePrice = course.price || 149;
  const discountAmount = Math.round(basePrice * appliedDiscount);
  const finalPrice = basePrice - discountAmount;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.toUpperCase().trim() === 'PIXELPRO') {
      setAppliedDiscount(0.40);
      setCouponStatus({ applied: true, message: 'PIXELPRO applied: 40% OFF!' });
    } else if (couponCode.toUpperCase().trim() === 'EARLYBIRD') {
      setAppliedDiscount(0.30);
      setCouponStatus({ applied: true, message: 'EARLYBIRD applied: 30% OFF!' });
    } else {
      setAppliedDiscount(0);
      setCouponStatus({ applied: false, message: 'Invalid coupon code' });
    }
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-lg h-full bg-[#0a0d14] border-l border-emerald-500/20 shadow-2xl z-10 flex flex-col justify-between overflow-y-auto">
        
        {/* Top Header */}
        <div className="p-6 bg-[#07090e] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Secure 256-Bit SSL Checkout
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 flex-1">
          {isSuccess ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 mx-auto flex items-center justify-center animate-bounce">
                <Check className="w-10 h-10 stroke-[3]" />
              </div>

              <div>
                <h3 className="text-2xl font-black text-white font-heading">
                  Welcome to Pixel Academy!
                </h3>
                <p className="text-xs text-slate-300 mt-2 max-w-sm mx-auto leading-relaxed">
                  Your enrollment for <strong>{course.title}</strong> is confirmed. An email with your instant login and RAW file downloads has been sent.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Order ID:</span>
                  <span className="font-mono text-emerald-400">#PX-2026-{Math.floor(1000 + Math.random() * 9000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Amount Paid:</span>
                  <span className="font-bold text-white">${finalPrice}.00 USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Access Type:</span>
                  <span className="text-slate-200">Lifetime Unlimited</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-emerald-400 hover:bg-emerald-300 transition-colors"
              >
                Access Student Dashboard Now
              </button>
            </div>
          ) : (
            <div>
              {/* Product Card Summary */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 mb-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
                      COURSE ENROLLMENT
                    </span>
                    <h4 className="text-base font-bold text-white font-heading mt-1">
                      {course.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Includes 45 Presets • 85+ RAW files • Lifetime Access
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-black text-white font-heading">${basePrice}</span>
                  </div>
                </div>
              </div>

              {/* Coupon Code Section */}
              <form onSubmit={handleApplyCoupon} className="mb-6">
                <label className="block text-[11px] uppercase tracking-wider font-mono text-slate-400 mb-1.5">
                  Promotional Coupon
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="e.g. PIXELPRO"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white font-mono text-xs uppercase focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors border border-slate-700"
                  >
                    Apply
                  </button>
                </div>
                {couponStatus.message && (
                  <p className={`text-[11px] mt-1.5 flex items-center gap-1 ${couponStatus.applied ? 'text-emerald-400' : 'text-rose-400'}`}>
                    <Sparkles className="w-3 h-3" />
                    {couponStatus.message}
                  </p>
                )}
              </form>

              {/* Order Breakdown */}
              <div className="space-y-2 py-4 border-t border-b border-white/10 text-xs mb-6">
                <div className="flex justify-between text-slate-400">
                  <span>Regular Tuition:</span>
                  <span>${basePrice}.00</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-medium">
                    <span>Discount (40% OFF):</span>
                    <span>-${discountAmount}.00</span>
                  </div>
                )}
                <div className="flex justify-between text-white font-bold text-sm pt-2 border-t border-white/5">
                  <span>Total Due Today:</span>
                  <span className="text-xl text-emerald-400 font-heading">${finalPrice}.00</span>
                </div>
              </div>

              {/* Checkout Form */}
              <form onSubmit={handleSubmitOrder} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Marcus Sterling"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Email Address (For Instant Course Access)
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="marcus@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Card Details (Simulated Test Mode)
                  </label>
                  <div className="relative">
                    <CreditCard className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      defaultValue="4242 •••• •••• 4242"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-slate-300 font-mono text-xs focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 hover:brightness-110 shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 mt-6"
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                      Securing Enrollment...
                    </span>
                  ) : (
                    <>
                      <span>Complete Enrollment • ${finalPrice}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Footer Guarantee */}
        <div className="p-4 bg-[#07090e] border-t border-white/10 text-center">
          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Backed by 30-Day 100% Money-Back Guarantee</span>
          </div>
        </div>

      </div>
    </div>
  );
}
