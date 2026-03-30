import React, { useState, useRef } from 'react';
import { 
  ChevronRight, 
  Zap, 
  ShieldCheck, 
  Server, 
  ArrowRight 
} from 'lucide-react';
import { useCountUp } from './hooks/useCountUp';
import { useScrollReveal } from './hooks/useScrollReveal';
import { BorderBeamButton } from './components/BorderBeamButton';
import { RAMStick } from './components/RAMStick';
import { ProductCard } from './components/ProductCard';
import { TestimonialCard } from './components/TestimonialCard';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [phone, setPhone] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (!val) {
      setPhone('');
      return;
    }
    if (val.startsWith('8')) val = '7' + val.substring(1);
    else if (!val.startsWith('7')) val = '7' + val;

    let formatted = '';
    if (val.length > 0) formatted += '+7 ';
    if (val.length > 1) formatted += '(' + val.substring(1, 4);
    if (val.length > 4) formatted += ') ' + val.substring(4, 7);
    if (val.length > 7) formatted += '-' + val.substring(7, 9);
    if (val.length > 9) formatted += '-' + val.substring(9, 11);
    
    setPhone(formatted);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const statOriginal = useCountUp(100, 2000);
  const statSpeed = useCountUp(6400, 3000, 4800);

  const heroReveal = useScrollReveal<HTMLElement>();
  const aboutReveal = useScrollReveal<HTMLElement>();
  const catalogReveal = useScrollReveal<HTMLElement>();
  const reviewsReveal = useScrollReveal<HTMLElement>();
  const ctaReveal = useScrollReveal<HTMLElement>();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-black text-white selection:bg-blue-500/30 font-sans overflow-x-hidden"
    >
      {/* Background Effects */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300" 
        style={{ 
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.04), transparent 40%)` 
        }} 
      />
      <div className="absolute inset-0 z-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent_80%)]" />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 border-b border-white/5 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white flex items-center justify-center rounded-sm">
            <span className="text-black font-bold text-xs">ACC</span>
          </div>
          <span className="font-medium tracking-tight text-sm hidden sm:block text-gray-300">Albatross Computer Components</span>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium text-gray-400">
          <a href="#catalog" onClick={(e) => handleScroll(e, 'catalog')} className="hover:text-white transition-colors">Каталог</a>
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-white transition-colors">О нас</a>
          <a href="#reviews" onClick={(e) => handleScroll(e, 'reviews')} className="hover:text-white transition-colors">Отзывы</a>
          <a href="#cta" onClick={(e) => handleScroll(e, 'cta')} className="bg-white text-black px-4 py-2 rounded-full font-bold hover:bg-white/90 transition-colors">Заказать</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main 
        ref={heroReveal.ref}
        className={`relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32 flex flex-col lg:flex-row items-center justify-between gap-16 reveal-up ${heroReveal.isVisible ? 'active' : ''}`}
      >
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-blue-400 mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Новые поставки DDR5 уже на складе
          </div>
          <h1 className="text-3xl min-[400px]:text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.1] break-words">
            МАКСИМАЛЬНАЯ <br className="hidden lg:block"/>ПРОИЗВОДИТЕЛЬНОСТЬ. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">ЛУЧШИЕ ЦЕНЫ.</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
            ACC — ваш надежный партнер в мире High-End комплектующих. Топовая оперативная память Kingston и Corsair со скоростью до 6400+ MHz по лучшим ценам в РФ.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <BorderBeamButton onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}>
              Открыть каталог
            </BorderBeamButton>
            <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-sm font-medium text-gray-400 hover:text-white flex items-center gap-2 transition-colors group">
              Наши преимущества <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        <div className="flex-1 w-full flex justify-center items-center mt-16 lg:mt-0">
          <RAMStick />
        </div>
      </main>

      <div className="w-full border-t border-dashed border-white/10" />

      {/* Advantages Section */}
      <section 
        id="about" 
        ref={aboutReveal.ref}
        className={`relative z-10 bg-[#050505] reveal-up ${aboutReveal.isVisible ? 'active' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter text-white mb-4 uppercase">Почему выбирают нас?</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Топовые решения для энтузиастов на самых выгодных условиях в России.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-dashed border-white/10 rounded-2xl overflow-hidden bg-black/20">
            <div className="p-10 border-b md:border-b-0 md:border-r border-dashed border-white/10 hover:bg-white/[0.02] transition-colors">
              <Zap className="w-8 h-8 text-gray-500 mb-6" />
              <div className="text-5xl font-bold tracking-tighter text-white mb-3">№1 в РФ</div>
              <h3 className="text-lg font-medium text-gray-300 mb-2">Лучшая цена</h3>
              <p className="text-sm text-gray-500">Гарантируем максимально выгодные предложения на оригинальные комплектующие мировых брендов.</p>
            </div>
            <div className="p-10 border-b md:border-b-0 md:border-r border-dashed border-white/10 hover:bg-white/[0.02] transition-colors">
              <ShieldCheck className="w-8 h-8 text-gray-500 mb-6" />
              <div className="text-5xl font-bold tracking-tighter text-white mb-3">{statOriginal}%</div>
              <h3 className="text-lg font-medium text-gray-300 mb-2">Оригинал</h3>
              <p className="text-sm text-gray-500">Только новые, запечатанные комплекты с полной заводской гарантией и проверкой подлинности.</p>
            </div>
            <div className="p-10 hover:bg-white/[0.02] transition-colors">
              <Server className="w-8 h-8 text-gray-500 mb-6" />
              <div className="text-5xl font-bold tracking-tighter text-white mb-3">24/7</div>
              <h3 className="text-lg font-medium text-gray-300 mb-2">Наличие</h3>
              <p className="text-sm text-gray-500">Все популярные линейки Kingston Fury и Corsair Vengeance уже на нашем складе и готовы к отправке.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full border-t border-dashed border-white/10" />

      {/* Products Section */}
      <section 
        id="catalog" 
        ref={catalogReveal.ref}
        className={`relative z-10 max-w-7xl mx-auto px-6 py-32 reveal-up ${catalogReveal.isVisible ? 'active' : ''}`}
      >
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold tracking-tighter text-white mb-4">Доступно к заказу</h2>
            <p className="text-gray-400">Топовые чипы Hynix A-die / M-die. Kingston & Corsair.</p>
          </div>
          <span className="inline-flex items-center gap-2 text-xs font-medium text-gray-400 bg-white/5 px-3 py-1.5 rounded-sm border border-white/10">
            До <span className="text-white">{statSpeed} MHz</span> из коробки
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard brand="Kingston" series="Fury Renegade RGB" desc="Экстремальная производительность с агрессивными таймингами и ярким дизайном." frequencies={[6000, 6400, 6800]} />
          <ProductCard brand="Corsair" series="Vengeance RGB" desc="Динамичная подсветка и превосходный потенциал для разгона в любой системе." frequencies={[5600, 6000, 6400]} />
          <ProductCard brand="Kingston" series="Fury Beast Black" desc="Строгий стиль и абсолютная стабильность для мощных игровых станций." frequencies={[5600, 6000]} />
          <ProductCard brand="Corsair" series="Dominator Titanium" desc="Премиум сегмент. Отборные чипы и запатентованное охлаждение DHX." frequencies={[6400, 7200]} />
          <ProductCard brand="Corsair" series="Vengeance LP" desc="Низкопрофильное решение для компактных сборок без потери мощности." frequencies={[5600, 6000]} />
          <div 
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex flex-col items-center justify-center p-8 border border-dashed border-white/20 hover:border-white/40 hover:bg-white/[0.02] cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-white text-xl font-light">+</span>
            </div>
            <h3 className="text-white font-medium mb-2">Запросить модель</h3>
            <p className="text-sm text-gray-500 text-center">Привезем любой комплект под заказ</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        id="reviews" 
        ref={reviewsReveal.ref}
        className={`relative z-10 py-24 bg-white/[0.01] reveal-up ${reviewsReveal.isVisible ? 'active' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter text-white mb-4 uppercase">Доверие клиентов</h2>
            <p className="text-gray-500">Нам доверяют сборку самых мощных ПК страны.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard logo="PC MASTER" rating={4.9} content="Лучшие цены на DDR5 в Москве. Взял кит Kingston на 6400, поехал на XMP без проблем. Сервис на высоте." name="Александр К." role="Gamer / Overclocker" />
            <TestimonialCard logo="HARD TECH" rating={5.0} content="Долго искал Dominator Titanium. У ребят в наличии по адекватной цене. Оригинал 100%, проверил по серийникам." name="Дмитрий М." role="System Architect" />
            <TestimonialCard logo="LAB 32" rating={4.8} content="Быстрая доставка и грамотная консультация. Помогли выбрать память под компактную сборку. Рекомендую!" name="Иван С." role="SFF Build Enthusiast" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="cta" 
        ref={ctaReveal.ref}
        className={`relative z-10 py-32 bg-[#050505] reveal-up ${ctaReveal.isVisible ? 'active' : ''}`}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative p-8 md:p-16 border border-dashed border-blue-500/30 bg-blue-950/10 backdrop-blur-xl rounded-3xl overflow-hidden">
            {/* Decorative background glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />
            
            <div className="relative z-10 text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
                Забронируйте комплект <span className="text-blue-400">по цене закупки</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Цены ниже сетевых ритейлеров.
              </p>
            </div>

            <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-gray-500 ml-1">Телефон</label>
                <input 
                  type="tel" 
                  required 
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500/50 transition-colors"
                />
              </div>
              <div className="md:col-span-2 mt-2">
                <button 
                  type="submit"
                  className="w-full h-14 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-widest rounded-xl transition-all hover:scale-[1.01] active:scale-[0.99] shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                >
                  УЗНАТЬ НАЛИЧИЕ И ТЕСТЫ
                </button>
              </div>
              <div className="md:col-span-2 flex flex-col items-center mt-3 gap-2">
                <p className="text-sm text-gray-400 font-medium">
                  • 4.9★ на Авито • Любые проверки на месте • Гарантия на возврат
                </p>
                <p className="text-xs text-gray-600">
                  Ваши данные в безопасности. Только инфо по наличию.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <div className="flex items-center gap-8 opacity-40 grayscale">
              <span className="text-xl font-bold tracking-tighter">INTEL</span>
              <span className="text-xl font-bold tracking-widest">AMD</span>
              <span className="text-xl font-bold text-red-600">MSI</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <ShieldCheck className="w-5 h-5 text-green-500" />
              <span>Гарантия совместимости или возврат средств.</span>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-xs text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Albatross Computer Components.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Конфиденциальность</a>
              <a href="#" className="hover:text-white transition-colors">Оферта</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
