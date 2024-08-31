import React from 'react';
import ProfileHeader from './ProfileHeader';
import InfoSection from './InfoSection';
import PasswordSection from './PasswordSection';
import OneTimeEdit from './OneTimeEdit';

function ProfilePage() {
  return (
    <main className="flex overflow-hidden flex-col mt-10">
      <ProfileHeader />
      <InfoSection
        title="Personal Information"
        description="*This Section can be edited anytime"
        fields={[
          { label: "Full Name*", placeholder: "Eg: John Doe", type: "text" },
          { label: "Phone Number", placeholder: "Eg: 623468782", type: "tel", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3de75ecf97c2b2e61720d80076e4bc252ae8317431674a597829fa8e3c2340a8?apiKey=b4d1b9e87b084579b1e2475047caf617&" },
          { label: "Document Upload", placeholder: "Upload Docs/pdfs/Images", type: "file", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/565ab8a360b1fa816c88f860a6ef15a505a4f59b083e591fb1d13145f64fe66b?apiKey=b4d1b9e87b084579b1e2475047caf617&" },
          { label: "Date of Birth", placeholder: "DD/MM/YYYY", type: "date", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/16c1b2ccb9cd660c23fef8b08bfdc0c34f215cb0a4e9664adcf5b22ed406eb7f?apiKey=b4d1b9e87b084579b1e2475047caf617&" },
          { label: "Address", placeholder: "Eg: ABC, Street no.1", type: "text" }
        ]}
      />
    <OneTimeEdit />
      <PasswordSection />
    </main>
  );
}

export default ProfilePage;