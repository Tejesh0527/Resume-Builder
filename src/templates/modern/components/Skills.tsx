import {
  useDatabases,
  useFrameworks,
  useLanguages,
  useLibraries,
  usePractices,
  useTechnologies,
  useTools,
} from '../../../stores/skills';

import { IItem } from '@/stores/index.interface';
import { SectionHeading } from '../atoms/SectionHeading';
import { scrollToElement } from '../../../helpers/utils/index';
import { useRef } from 'react';

export const SkillsSection = ({ title, list }: { title: string; list: IItem[] }) => {
  const skillRef = useRef<null | HTMLDivElement>(null);
  useLanguages.subscribe(() => {
    scrollToElement(skillRef);
  });
  useFrameworks.subscribe(() => {
    scrollToElement(skillRef);
  });
  useLibraries.subscribe(() => {
    scrollToElement(skillRef);
  });
  usePractices.subscribe(() => {
    scrollToElement(skillRef);
  });
  useDatabases.subscribe(() => {
    scrollToElement(skillRef);
  });
  useTechnologies.subscribe(() => {
    scrollToElement(skillRef);
  });
  useTools.subscribe(() => {
    scrollToElement(skillRef);
  });

  return (
    <div className="my-3" ref={skillRef}>
      <SectionHeading title={title} />
      <div className="flex items-center flex-wrap gap-2.5 py-2">
        {list.map((item: IItem, index) => (
          <div key={index} className="py-1 px-2 text-sm font-medium border-b-2 border-[#e5e7eb]">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};
