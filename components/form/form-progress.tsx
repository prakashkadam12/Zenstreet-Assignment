'use client';

import { useFormStore } from '@/lib/store';
import { Progress } from '@/components/ui/progress';

export function FormProgress() {
  const { currentStep } = useFormStore((state) => state.formData);
  const progress = (currentStep / 4) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Progress</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
}