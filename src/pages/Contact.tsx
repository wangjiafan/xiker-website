import { Mail, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-dark text-white text-center">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{t("contact.title")}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">{t("contact.info.title")}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Email */}
              <div className="bg-gray-900 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-800">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary bg-opacity-20 p-4 rounded-lg">
                    <Mail className="text-primary" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{t("contact.info.email")}</h3>
                    <p className="text-gray-400 mb-4">{t("contact.info.emailDesc")}</p>
                    <div className="space-y-3">
                      <a
                        href="mailto:sales01@xiker-tech.com"
                        className="text-primary font-semibold text-lg hover:text-orange-400 transition-colors block"
                      >
                        sales01@xiker-tech.com
                      </a>
                      <a
                        href="mailto:jean@xiker-tech.com"
                        className="text-primary font-semibold text-lg hover:text-orange-400 transition-colors block"
                      >
                        jean@xiker-tech.com
                      </a>
                      <a
                        href="mailto:jasper@xiker-tech.com"
                        className="text-primary font-semibold text-lg hover:text-orange-400 transition-colors block"
                      >
                        jasper@xiker-tech.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-gray-900 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-800">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary bg-opacity-20 p-4 rounded-lg">
                    <MapPin className="text-primary" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{t("contact.info.address")}</h3>
                    <p className="text-gray-400 mb-1">Shenzhen Xiker Innovation Technology Co., Ltd.</p>
                    <p className="text-gray-400 mb-1">Lotus Plaza, Block B, 17th Floor</p>
                    <p className="text-gray-400 mb-1">Nantou Street, Nanshan District</p>
                    <p className="text-gray-400">Shenzhen, China</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <div className="bg-black rounded-xl shadow-lg overflow-hidden border border-gray-800">
            <div className="bg-gray-800 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-gray-600 mx-auto mb-4" size={64} />
                <p className="text-gray-400 text-lg">Shenzhen, Nanshan District</p>
                <p className="text-gray-500 text-sm mt-2">Lotus Plaza, Block B, 17th Floor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">{t("contact.cta.title")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            {t("contact.cta.subtitle")}
          </p>
          <a
            href="mailto:sales01@xiker-tech.com"
            className="btn-primary bg-primary hover:bg-primary-dark text-white text-lg"
          >
            {t("contact.cta.button")}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
