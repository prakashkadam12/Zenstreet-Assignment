import { FormProgress } from '@/components/form/form-progress';
import { FormSteps } from '@/components/form/form-steps';
import { Card } from '@/components/ui/card';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`${inter.className} max-w-3xl mx-auto space-y-6`}>
      <FormProgress />
      <Card className="p-6">
        <FormSteps />
      </Card>
    </div>
  );
}
