import MobileFloatingActions from '../MobileFloatingActions';

export default function MobileFloatingActionsExample() {
  return (
    <div className="relative h-screen bg-background">
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Mobile Floating Actions</h2>
        <p className="text-muted-foreground">
          Resize your browser to mobile width to see the floating action bar at the bottom.
        </p>
      </div>
      <MobileFloatingActions />
    </div>
  );
}
