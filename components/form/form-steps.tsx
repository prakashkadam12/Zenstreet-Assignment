'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useFormStore } from '@/lib/store';
import { PersonalInfo } from './steps/personal-info';
import { AddressDetails } from './steps/address-details';
import { Preferences } from './steps/preferences';
import { Review } from './steps/review';

const steps = [
  { id: 1, component: PersonalInfo },
  { id: 2, component: AddressDetails },
  { id: 3, component: Preferences },
  { id: 4, component: Review },
];

export function FormSteps() {
  const { currentStep } = useFormStore((state) => state.formData);

  return (
    <AnimatePresence mode="wait">
      {steps.map(
        ({ id, component: Component }) =>
          currentStep === id && (
            <motion.div
              key={id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Component />
            </motion.div>
          )
      )}
    </AnimatePresence>
  );
}