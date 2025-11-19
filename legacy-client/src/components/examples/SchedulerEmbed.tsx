import SchedulerEmbed from '../SchedulerEmbed';

export default function SchedulerEmbedExample() {
  return (
    <div className="p-8 flex gap-4">
      <SchedulerEmbed triggerText="Schedule Now" variant="default" />
      <SchedulerEmbed triggerText="Emergency Service" variant="destructive" />
    </div>
  );
}
