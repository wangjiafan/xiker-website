import { Lightbulb, ShieldCheck, Users, Leaf } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  const values = [
    {
      icon: <Lightbulb size={40} className="text-primary" />,
      title: t("about.values.innovation"),
      description: t("about.values.innovationDesc")
    },
    {
      icon: <ShieldCheck size={40} className="text-primary" />,
      title: t("about.values.quality"),
      description: t("about.values.qualityDesc")
    },
    {
      icon: <Users size={40} className="text-primary" />,
      title: t("about.values.customer"),
      description: t("about.values.customerDesc")
    },
    {
      icon: <Leaf size={40} className="text-primary" />,
      title: t("about.values.integrity"),
      description: t("about.values.integrityDesc")
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-dark text-white text-center">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{t("about.title")}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="section-padding bg-black">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">{t("about.company.title")}</h2>
          <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
            <p>
              {t("about.company.description1")}
            </p>
            <p>
              {t("about.company.description2")}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-black p-8 rounded-xl border border-gray-800">
              <h2 className="text-3xl font-bold text-white mb-6">{t("about.mission.title")}</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                {t("about.mission.description")}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-black p-8 rounded-xl border border-gray-800">
              <h2 className="text-3xl font-bold text-white mb-6">{t("about.vision.title")}</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                {t("about.vision.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">{t("about.values.title")}</h2>
          <p className="text-lg text-gray-400 mb-12 text-center max-w-2xl mx-auto">
            {t("about.values.subtitle")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-gray-900 hover:bg-gray-800 transition-colors duration-300 border border-gray-800"
              >
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
