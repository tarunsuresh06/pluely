import { PageLayout } from "@/layouts";
import { useApp } from "@/contexts";

const Dashboard = () => {
  const { allAiProviders, selectedAIProvider, allSttProviders, selectedSttProvider } = useApp();

  const activeAi = allAiProviders.find(p => p.id === selectedAIProvider.provider);
  const activeStt = allSttProviders.find(p => p.id === selectedSttProvider.provider);

  return (
    <PageLayout
      title="Dashboard"
      description="Manage your configured AI and STT providers."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {/* AI Provider Status */}
        <div className="flex flex-col gap-2 p-4 rounded-xl border border-border bg-card">
          <h3 className="text-sm font-semibold text-card-foreground">Active AI Provider</h3>
          {activeAi ? (
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">{activeAi.id}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Model: {selectedAIProvider.variables?.MODEL || "Default"}
              </p>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">No AI provider configured.</p>
          )}
        </div>

        {/* STT Provider Status */}
        <div className="flex flex-col gap-2 p-4 rounded-xl border border-border bg-card">
          <h3 className="text-sm font-semibold text-card-foreground">Active STT Provider</h3>
          {activeStt ? (
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">{activeStt.id}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Model: {selectedSttProvider.variables?.MODEL || "Default"}
              </p>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">No STT provider configured.</p>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
