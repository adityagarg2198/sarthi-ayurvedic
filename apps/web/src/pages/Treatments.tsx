import { Card } from "@/components/ui/card";
import { type FC } from "react";

const TreatmentSection: FC<{
  heading: string[];
  subHeading?: string;
  listObj: Record<string, string>;
}> = ({ heading, subHeading, listObj }) => {
  const generateListItems = () => {
    return Object.entries(listObj).map(([key, value]) => {
      return (
        <li key={key}>
          👉 <span className="text-sarthi-green">{key} - </span>
          {value}
        </li>
      );
    });
  };

  return (
    <Card className="flex flex-col w-full max-w-3xl gap-5 p-2">
      <h2 className="text-sarthi-text-secondary text-center">
        {heading[0]} <span className="text-sarthi-green">{heading[1]}</span>
      </h2>
      {subHeading && <h3 className="text-center">{subHeading}</h3>}
      <ul className="flex flex-col gap-2">{generateListItems()}</ul>
    </Card>
  );
};

const Treatments = () => {
  return (
    <section className="w-full h-full text-neutral-600 p-2 flex flex-col gap-10">
      <h1 className="text-sarthi-text-secondary text-center mt-10">
        🌿 Our <span className="text-sarthi-green">Approach</span>
      </h1>
      <h4 className="text-center">
        At Sarthi Ayurvedic Hospital, every treatment begins with understanding
        your body type <span className="text-sarthi-green">(Prakriti)</span>,
        lifestyle, and health concerns. We combine traditional Ayurvedic wisdom
        with a modern approach to deliver long-lasting healing and balance.
      </h4>
      <TreatmentSection
        heading={["🧘 Panchakarma", "Therapies"]}
        subHeading="The cornerstone of Ayurvedic healing."
        listObj={{
          "Vamana (Therapeutic Emesis)":
            "Detoxifies by eliminating toxins from the stomach.",
          "Virechana (Purgation Therapy)":
            "Cleanses toxins from the liver and intestines.",
          "Basti (Medicated Enema)":
            "Improves digestion and balances Vata dosha.",
          "Nasya (Nasal Therapy)":
            "Treats sinus, migraine, and neurological issues.",
          "Raktamokshana (Blood Purification)":
            "Removes toxins from the blood for skin & joint health.",
        }}
      />
      <TreatmentSection
        heading={["💆 Specialized", "Ayurvedic Treatments"]}
        listObj={{
          "Joint & Spine Care":
            "Effective for arthritis, slip disc, spondylitis, and chronic pain.",
          "Skin & Hair Care":
            "Herbal treatments for eczema, psoriasis, dandruff, and hair loss.",
          "Digestive Disorders":
            "Natural relief from acidity, IBS, constipation, and ulcers.",
          "Stress & Mental Wellness":
            "Shirodhara, meditation, and therapies for anxiety, depression, and insomnia.",
          "Weight Management":
            "Detox programs, herbal therapies, and diet guidance for healthy weight.",
          "Respiratory Care":
            "Treatment for asthma, allergies, sinusitis, and bronchitis.",
        }}
      />
      <TreatmentSection
        heading={["🌺 Wellness", "& Rejuvenation"]}
        listObj={{
          "Abhyanga (Herbal Oil Massage)":
            "Full-body massage for relaxation and improved circulation.",
          "Shirodhara (Oil Dripping Therapy)":
            "Deep relaxation therapy balancing mind and body.",
          "Swedana (Herbal Steam Therapy)":
            "Removes toxins and boosts immunity.",
          "Rasayana Therapy":
            "Anti-aging and immunity-boosting herbal therapies.",
        }}
      />
    </section>
  );
};

export default Treatments;
