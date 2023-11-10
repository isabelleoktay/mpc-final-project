// LanguageSelectSection.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SingleSelect from './SingleSelect';

const LanguageSelectSection = () => {
  const { t } = useTranslation();

  const languageOptions = [
    { value: 'catalan', label: t('Català') },
    { value: 'spanish', label: t('Castellano') },
    { value: 'english', label: t('English') },
  ];

  // State to manage the selected value
  const [selectedLanguage, setSelectedLanguage] = useState('');

  return (
    <div className="mb-6">
      <SingleSelect
        options={[{ value: '', label: t('Choose your language') }, ...languageOptions]}
        selectedValue={selectedLanguage || ''}
        onChange={(selectedValue) => setSelectedLanguage(selectedValue)}
      />
    </div>
  );
};

export default LanguageSelectSection;
