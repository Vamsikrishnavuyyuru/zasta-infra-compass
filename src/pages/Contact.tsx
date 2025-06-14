
import Layout from '@/components/Layout';
import SectionHeaderWithCity from '@/components/shared/SectionHeaderWithCity';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section with City Animation */}
      <SectionHeaderWithCity
        title="Contact Us"
        subtitle="Ready to start your next infrastructure project? Get in touch with our experts today."
      />

      {/* Contact Form and Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <ContactInfo />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
