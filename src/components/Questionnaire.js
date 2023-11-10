// Questionnaire.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelectSection from './LanguageSelect';
import TextInput from './TextInput'; 
import SingleSelect from './SingleSelect'; 
import MultiSelect from './MultiSelect';
import RadioSelect from './RadioSelect';

const Questionnaire = () => {
  const { t } = useTranslation();

  // State variables for first name, last name, and email
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [usesHearingDevices, setUsesHearingDevices] = useState('');
  const [isAnAudiophile, setIsAnAudiophile] = useState('');
  const [practicesMusic, setPracticesMusic] = useState('');

  const [hearingImpairments, setHearingImpairments] = useState([]);
  const [otherInputVisible, setOtherInputVisible] = useState(false);
  const [otherInputValue, setOtherInputValue] = useState('');

  // Event handlers for first name, last name, and email
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAgeChange = (selectedValue) => {
    setAge(selectedValue);
    };

  const handleGenderChange = (selectedValue) => {
    setGender(selectedValue);
  };

  const handleUsesHearingDevicesChange = (selectedValue) => {
    setUsesHearingDevices(selectedValue);
  }

  const handleHearingImpairmentsChange = (selectedValues) => {
    setHearingImpairments(selectedValues);
    setOtherInputVisible(selectedValues.includes('other'));
  };

  const handleOtherInputChange = (event) => {
    setOtherInputValue(event.target.value);
  };

  const handleIsAnAudiophileChange = (selectedValue) => {
    setIsAnAudiophile(selectedValue);
  }

  const handlePracticesMusicChange = (selectedValue) => {
    setPracticesMusic(selectedValue);
  }

  // Options for age select
  const ageOptions = [
    { value: 20, label: t('20') },
    { value: 21, label: t('21') },
    { value: 22, label: t('22') },
    { value: 23, label: t('23') },
    { value: 24, label: t('24') },
    { value: 25, label: t('25') },
    { value: 26, label: t('26') },
    { value: 27, label: t('27') },
    { value: 28, label: t('28') },
    { value: 29, label: t('29') },
  ];

  // Options for gender select
  const genderOptions = [
    { value: 'male', label: t('Male') },
    { value: 'female', label: t('Female') },
    { value: 'nonBinary', label: t('Non-binary') },
    { value: 'preferNotToSay', label: t('Prefer not to say') },
  ];

  // Yes / no options
  const yesOrNoOptions = [
    { value: 'yes', label: t('Yes') },
    { value: 'no', label: t('No') },
  ]

  // Hearing impairments options
  const hearingImpairmentsOptions = [
    { value: 'no', label: t('No') },
    { value: 'sensorineural', label: t('Sensorineural Hearing Loss / Presbycusis') },
    { value: 'conductive', label: t('Conductive Hearing Loss') },
    { value: 'tinnitus', label: t('Tinnitus (ringing in the ears)') },
    { value: 'noise-induced', label: t('Noise-Induced Hearing Loss') },
    { value: 'menieres', label: t("Meniere's Disease") },
    { value: 'otosclerosis', label: t('Otosclerosis') },
    { value: 'sudden', label: t('Sudden Sensorineural Hearing Loss') },
    { value: 'other', label: t('Other') },
  ];

  const practicesMusicOptions = [
    { value: 'regularly', label: t('Yes, regularly') },
    { value: 'occasionally', label: t('Yes, occasionally') },
    { value: 'no', label: t('No, I do not practice music') },
  ]

  return (
    <div className='max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md'>
      <LanguageSelectSection />

      {/* Reusable TextInput for First Name */}
      <TextInput
        id="firstName"
        label={t('First name')}
        value={firstName}
        onChange={handleFirstNameChange}
      />

      {/* Reusable TextInput for Last Name */}
      <TextInput
        id="lastName"
        label={t('Last name')}
        value={lastName}
        onChange={handleLastNameChange}
      />

      {/* Reusable TextInput for Email */}
      <TextInput
        id="email"
        label={t('Email')}
        value={email}
        onChange={handleEmailChange}
      />

      {/* Custom SingleSelect for Age */}
      <SingleSelect
        options={[{ value: '', label: t('Age') }, ...ageOptions]}
        selectedValue={age}
        onChange={handleAgeChange}
      />

      {/* Custom RadioSelect for Gender */}
      <RadioSelect
        label={t('Gender')}
        options={genderOptions}
        selectedValue={gender}
        onChange={handleGenderChange}
      />

      {/* Custom RadioSelect for Gender */}
      <RadioSelect
        label={t('Do you use any hearing devices, such as hearing aids or cochlear implants?')}
        options={yesOrNoOptions}
        selectedValue={usesHearingDevices}
        onChange={handleUsesHearingDevicesChange}
      />

      {/* Custom MultiSelect for Hearing Impairments */}
      <MultiSelect
        title={t('Do you suffer from any sort of hearing impairment?')}
        options={hearingImpairmentsOptions}
        selectedValues={hearingImpairments}
        onChange={handleHearingImpairmentsChange}
      />

      {/* Display "other" text input if selected */}
      {otherInputVisible && (
        <TextInput
          id="otherInput"
          label={t('Other (please elaborate)')}
          value={otherInputValue}
          onChange={handleOtherInputChange}
        />
      )}

      {/* Custom RadioSelect for Is An Audiophile */}
      <RadioSelect
        label={t('Would you consider yourself an audiophile? In other words, do you make a conscious effort to find Hi-Fi equipment and audio files when listening to music?')}
        options={yesOrNoOptions}
        selectedValue={isAnAudiophile}
        onChange={handleIsAnAudiophileChange}
      />

      {/* Custom RadioSelect for Practices Music */}
      <RadioSelect
        label={t('Would you consider yourself an audiophile? In other words, do you make a conscious effort to find Hi-Fi equipment and audio files when listening to music?')}
        options={practicesMusicOptions}
        selectedValue={practicesMusic}
        onChange={handlePracticesMusicChange}
      />

    </div>
  );
};

export default Questionnaire;
