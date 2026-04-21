import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/logo-dark.jpeg"
              alt="توب تريند"
              width={80}
              height={80}
              className="h-16 w-auto object-contain rounded-xl mb-4"
            />
            <p className="text-brand-rose/80 text-sm leading-relaxed max-w-xs">
              وكالة توب تريند للتسويق الرقمي وإدارة وسائل التواصل الاجتماعي.
              نساعدك على بناء حضور رقمي قوي وتحقيق نتائج حقيقية.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-base mb-5 text-brand-blush">روابط سريعة</h4>
            <ul className="space-y-3">
              {[
                { label: "الرئيسية", href: "/" },
                { label: "خدماتنا وباقاتنا", href: "/services" },
                { label: "اطلب خدمة", href: "/request" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-rose/70 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-base mb-5 text-brand-blush">تواصل معنا</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=971522729796&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-rose/70 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>📱</span>
                  <span dir="ltr">+971 52 272 9796</span>
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=966560861010&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-rose/70 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>📱</span>
                  <span dir="ltr">+966 56 086 1010</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:Sales@toptrend.ae"
                  className="text-sm text-brand-rose/70 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>✉️</span>
                  <span>Sales@toptrend.ae</span>
                </a>
              </li>
               <li>
                <a
                  href="https://www.google.com/maps/place/Top+Trend+Marketing/@25.3751178,55.5208454,2997m/data=!3m1!1e3!4m10!1m2!2m1!1stop!3m6!1s0x3ef5f732b2efea0d:0xeeee122300156f8!8m2!3d25.3751176!4d55.507353!15sCgN0b3CSARBtYXJrZXRpbmdfYWdlbmN54AEA!16s%2Fg%2F11nhgkbk8b?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-rose/70 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>📍</span>
                  <span>المويهات 2 - عجمان - الإمارات العربية المتحدة</span>
                </a>
              </li>
              <li className="text-sm text-brand-rose/50 flex items-center gap-3 flex-wrap">
                <span>رقم الرخصة: 136604</span>
                <span>|</span>
                <span>رقم الرخصة الإعلامية: 7529829</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-rose/40">
            © {new Date().getFullYear()} توب تريند. جميع الحقوق محفوظة.
          </p>
          <p className="text-xs text-brand-rose/30">
            وكالة تسويق إبداعية في الإمارات العربية المتحدة
          </p>
        </div>
      </div>
    </footer>
  );
}
