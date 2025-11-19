import { useEffect, lazy, Suspense } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import CookieConsent from "@/components/CookieConsent";
import AccessibilityToggle from "@/components/AccessibilityToggle";
import SkipToContent from "@/components/SkipToContent";
import Schema from "@/components/Schema";
import PageLoadingFallback from "@/components/PageLoadingFallback";

// Eager imports for critical pages
import Home from "@/pages/Home";

// Lazy-loaded page components for code splitting
// This reduces initial bundle size by ~70%
const AboutUs = lazy(() => import("@/pages/AboutUs"));
const KnowledgeHub = lazy(() => import("@/pages/KnowledgeHub"));
const Financing = lazy(() => import("@/pages/Financing"));
const Guarantees = lazy(() => import("@/pages/Guarantees"));
const Careers = lazy(() => import("@/pages/Careers"));
const FamilyProtectionPlans = lazy(() => import("@/pages/FamilyProtectionPlans"));
const CustomerReviews = lazy(() => import("@/pages/CustomerReviews"));
const VideoTestimonials = lazy(() => import("@/pages/VideoTestimonials"));
const RecentProjects = lazy(() => import("@/pages/RecentProjects"));
const ACRepair = lazy(() => import("@/pages/ACRepair"));
const ACService = lazy(() => import("@/pages/ACService"));
const ACInstallation = lazy(() => import("@/pages/ACInstallation"));
const ACTuneup = lazy(() => import("@/pages/ACTuneup"));
const DuctlessMiniSplitRepair = lazy(() => import("@/pages/DuctlessMiniSplitRepair"));
const DuctlessMiniSplitInstallation = lazy(() => import("@/pages/DuctlessMiniSplitInstallation"));
const DuctCleaning = lazy(() => import("@/pages/DuctCleaning"));
const DuctRepair = lazy(() => import("@/pages/DuctRepair"));
const DuctInstallation = lazy(() => import("@/pages/DuctInstallation"));
const DuctSealing = lazy(() => import("@/pages/DuctSealing"));
const SmartThermostatInstallation = lazy(() => import("@/pages/SmartThermostatInstallation"));
const IndoorAirQuality = lazy(() => import("@/pages/IndoorAirQuality"));
const SolarAC = lazy(() => import("@/pages/SolarAC"));
const HeaterRepair = lazy(() => import("@/pages/HeaterRepair"));
const HeaterService = lazy(() => import("@/pages/HeaterService"));
const HeaterInstallation = lazy(() => import("@/pages/HeaterInstallation"));
const HeaterTuneup = lazy(() => import("@/pages/HeaterTuneup"));
const HeatPumps = lazy(() => import("@/pages/HeatPumps"));
const Furnaces = lazy(() => import("@/pages/Furnaces"));
const WaterFiltration = lazy(() => import("@/pages/WaterFiltration"));
const HybridWaterHeaters = lazy(() => import("@/pages/HybridWaterHeaters"));
const TrenchlessRepair = lazy(() => import("@/pages/TrenchlessRepair"));
const RooterSpecial = lazy(() => import("@/pages/RooterSpecial"));
const WaterSofteners = lazy(() => import("@/pages/WaterSofteners"));
const WaterHeaters = lazy(() => import("@/pages/WaterHeaters"));
const WaterHeaterRepair = lazy(() => import("@/pages/WaterHeaterRepair"));
const WaterHeaterInstallation = lazy(() => import("@/pages/WaterHeaterInstallation"));
const WaterHeaterFlush = lazy(() => import("@/pages/WaterHeaterFlush"));
const PlumbingMaintenance = lazy(() => import("@/pages/PlumbingMaintenance"));
const DrainClearing = lazy(() => import("@/pages/DrainClearing"));
const LeakDetection = lazy(() => import("@/pages/LeakDetection"));
const WaterLeakRepair = lazy(() => import("@/pages/WaterLeakRepair"));
const SewerLineRepair = lazy(() => import("@/pages/SewerLineRepair"));
const SewerCameraInspection = lazy(() => import("@/pages/SewerCameraInspection"));
const SinkRepairInstallation = lazy(() => import("@/pages/SinkRepairInstallation"));
const BidetInstallation = lazy(() => import("@/pages/BidetInstallation"));
const GarbageDisposal = lazy(() => import("@/pages/GarbageDisposal"));
const ToiletInstallation = lazy(() => import("@/pages/ToiletInstallation"));
const ResidentialRoofRepair = lazy(() => import("@/pages/ResidentialRoofRepair"));
const ResidentialRoofInstallation = lazy(() => import("@/pages/ResidentialRoofInstallation"));
const ResidentialRoofReplacement = lazy(() => import("@/pages/ResidentialRoofReplacement"));
const ResidentialRoofCoating = lazy(() => import("@/pages/ResidentialRoofCoating"));
const ResidentialRoofInspection = lazy(() => import("@/pages/ResidentialRoofInspection"));
const CommercialRoofRepair = lazy(() => import("@/pages/CommercialRoofRepair"));
const CommercialRoofInstallation = lazy(() => import("@/pages/CommercialRoofInstallation"));
const CommercialRoofReplacement = lazy(() => import("@/pages/CommercialRoofReplacement"));
const CommercialRoofCoating = lazy(() => import("@/pages/CommercialRoofCoating"));
const CommercialRoofInspection = lazy(() => import("@/pages/CommercialRoofInspection"));
const SolarTubularLights = lazy(() => import("@/pages/SolarTubularLights"));
const Skylights = lazy(() => import("@/pages/Skylights"));
const FlatRoofs = lazy(() => import("@/pages/FlatRoofs"));
const ShingleRoofs = lazy(() => import("@/pages/ShingleRoofs"));
const TileRoofs = lazy(() => import("@/pages/TileRoofs"));
const PitchedRoofs = lazy(() => import("@/pages/PitchedRoofs"));
const MetalRoofs = lazy(() => import("@/pages/MetalRoofs"));
const ResidentialSolarInstallation = lazy(() => import("@/pages/ResidentialSolarInstallation"));
const CommercialSolarInstallation = lazy(() => import("@/pages/CommercialSolarInstallation"));
const SolarMaintenance = lazy(() => import("@/pages/SolarMaintenance"));
const HomeEnergyAudit = lazy(() => import("@/pages/HomeEnergyAudit"));
const SolarTaxCredits = lazy(() => import("@/pages/SolarTaxCredits"));
const SolarPanelCosts = lazy(() => import("@/pages/SolarPanelCosts"));
const ElectricalRepair = lazy(() => import("@/pages/ElectricalRepair"));
const GeneracInstallation = lazy(() => import("@/pages/GeneracInstallation"));
const GeneracRepair = lazy(() => import("@/pages/GeneracRepair"));
const ElectricalPanelUpgrades = lazy(() => import("@/pages/ElectricalPanelUpgrades"));
const HomeEnergyUpgrades = lazy(() => import("@/pages/HomeEnergyUpgrades"));
const CeilingFanInstallation = lazy(() => import("@/pages/CeilingFanInstallation"));
const OutdoorMotionLighting = lazy(() => import("@/pages/OutdoorMotionLighting"));
const LightingUpgrades = lazy(() => import("@/pages/LightingUpgrades"));
const CircuitBreakers = lazy(() => import("@/pages/CircuitBreakers"));
const OutletsSwitches = lazy(() => import("@/pages/OutletsSwitches"));
const NewHomebuyerOffer = lazy(() => import("@/pages/NewHomebuyerOffer"));
const RealtorsOffer = lazy(() => import("@/pages/RealtorsOffer"));
const WhyTucsonChoosesIntelligentDesign = lazy(() => import("@/pages/WhyTucsonChoosesIntelligentDesign"));
const AreasWeServe = lazy(() => import("@/pages/AreasWeServe"));
const Tucson = lazy(() => import("@/pages/Tucson"));
const OroValley = lazy(() => import("@/pages/OroValley"));
const Marana = lazy(() => import("@/pages/Marana"));
const Sahuarita = lazy(() => import("@/pages/Sahuarita"));
const GreenValley = lazy(() => import("@/pages/GreenValley"));
const Vail = lazy(() => import("@/pages/Vail"));
const CoronaDeTucson = lazy(() => import("@/pages/CoronaDeTucson"));
const DrexelHeights = lazy(() => import("@/pages/DrexelHeights"));
const CasasAdobes = lazy(() => import("@/pages/CasasAdobes"));
const TucsonEstates = lazy(() => import("@/pages/TucsonEstates"));
const Tortolita = lazy(() => import("@/pages/Tortolita"));
const PictureRocks = lazy(() => import("@/pages/PictureRocks"));
const Rillito = lazy(() => import("@/pages/Rillito"));
const Cortaro = lazy(() => import("@/pages/Cortaro"));
const AvraValley = lazy(() => import("@/pages/AvraValley"));
const EastTucson = lazy(() => import("@/pages/EastTucson"));
const CatalinaFoothills = lazy(() => import("@/pages/CatalinaFoothills"));
const TanqueVerde = lazy(() => import("@/pages/TanqueVerde"));
const RitaRanch = lazy(() => import("@/pages/RitaRanch"));
const GladdenFarms = lazy(() => import("@/pages/GladdenFarms"));
const SaddleBrooke = lazy(() => import("@/pages/SaddleBrooke"));
const SolarInstallationOroValley = lazy(() => import("@/pages/SolarInstallationOroValley"));
const SolarInstallationMarana = lazy(() => import("@/pages/SolarInstallationMarana"));
const SolarInstallationGreenValley = lazy(() => import("@/pages/SolarInstallationGreenValley"));
const SolarInstallationSahuarita = lazy(() => import("@/pages/SolarInstallationSahuarita"));
const SolarInstallationVail = lazy(() => import("@/pages/SolarInstallationVail"));
const SolarInstallationCasasAdobes = lazy(() => import("@/pages/SolarInstallationCasasAdobes"));
const SolarInstallationTucson = lazy(() => import("@/pages/SolarInstallationTucson"));
const SolarInstallationTucsonEstates = lazy(() => import("@/pages/SolarInstallationTucsonEstates"));
const SolarInstallationTortolita = lazy(() => import("@/pages/SolarInstallationTortolita"));
const SolarInstallationTanqueVerde = lazy(() => import("@/pages/SolarInstallationTanqueVerde"));
const SolarInstallationSaddleBrooke = lazy(() => import("@/pages/SolarInstallationSaddleBrooke"));
const SolarInstallationRitaRanch = lazy(() => import("@/pages/SolarInstallationRitaRanch"));
const SolarInstallationRillito = lazy(() => import("@/pages/SolarInstallationRillito"));
const SolarInstallationPictureRocks = lazy(() => import("@/pages/SolarInstallationPictureRocks"));
const SolarInstallationGladdenFarms = lazy(() => import("@/pages/SolarInstallationGladdenFarms"));
const SolarInstallationEastTucson = lazy(() => import("@/pages/SolarInstallationEastTucson"));
const SolarInstallationDrexelHeights = lazy(() => import("@/pages/SolarInstallationDrexelHeights"));
const SolarInstallationAvraValley = lazy(() => import("@/pages/SolarInstallationAvraValley"));
const SolarInstallationCoronadeTucson = lazy(() => import("@/pages/SolarInstallationCoronadeTucson"));
const SolarInstallationCortaro = lazy(() => import("@/pages/SolarInstallationCortaro"));
const PlumbingOroValley = lazy(() => import("@/pages/PlumbingOroValley"));
const PlumbingMarana = lazy(() => import("@/pages/PlumbingMarana"));
const PlumbingGreenValley = lazy(() => import("@/pages/PlumbingGreenValley"));
const PlumbingSahuarita = lazy(() => import("@/pages/PlumbingSahuarita"));
const PlumbingVail = lazy(() => import("@/pages/PlumbingVail"));
const PlumbingCasasAdobes = lazy(() => import("@/pages/PlumbingCasasAdobes"));
const PlumbingTucson = lazy(() => import("@/pages/PlumbingTucson"));
const PlumbingTucsonEstates = lazy(() => import("@/pages/PlumbingTucsonEstates"));
const PlumbingTortolita = lazy(() => import("@/pages/PlumbingTortolita"));
const PlumbingTanqueVerde = lazy(() => import("@/pages/PlumbingTanqueVerde"));
const PlumbingSaddleBrooke = lazy(() => import("@/pages/PlumbingSaddleBrooke"));
const PlumbingRitaRanch = lazy(() => import("@/pages/PlumbingRitaRanch"));
const PlumbingRillito = lazy(() => import("@/pages/PlumbingRillito"));
const PlumbingPictureRocks = lazy(() => import("@/pages/PlumbingPictureRocks"));
const PlumbingGladdenFarms = lazy(() => import("@/pages/PlumbingGladdenFarms"));
const PlumbingEastTucson = lazy(() => import("@/pages/PlumbingEastTucson"));
const PlumbingDrexelHeights = lazy(() => import("@/pages/PlumbingDrexelHeights"));
const PlumbingAvraValley = lazy(() => import("@/pages/PlumbingAvraValley"));
const PlumbingCoronadeTucson = lazy(() => import("@/pages/PlumbingCoronadeTucson"));
const PlumbingCortaro = lazy(() => import("@/pages/PlumbingCortaro"));
const ElectricalOroValley = lazy(() => import("@/pages/ElectricalOroValley"));
const ElectricalMarana = lazy(() => import("@/pages/ElectricalMarana"));
const ElectricalGreenValley = lazy(() => import("@/pages/ElectricalGreenValley"));
const ElectricalSahuarita = lazy(() => import("@/pages/ElectricalSahuarita"));
const ElectricalVail = lazy(() => import("@/pages/ElectricalVail"));
const ElectricalCasasAdobes = lazy(() => import("@/pages/ElectricalCasasAdobes"));
const ElectricalTucson = lazy(() => import("@/pages/ElectricalTucson"));
const ElectricalTucsonEstates = lazy(() => import("@/pages/ElectricalTucsonEstates"));
const ElectricalTortolita = lazy(() => import("@/pages/ElectricalTortolita"));
const ElectricalTanqueVerde = lazy(() => import("@/pages/ElectricalTanqueVerde"));
const ElectricalSaddleBrooke = lazy(() => import("@/pages/ElectricalSaddleBrooke"));
const ElectricalRitaRanch = lazy(() => import("@/pages/ElectricalRitaRanch"));
const ElectricalRillito = lazy(() => import("@/pages/ElectricalRillito"));
const ElectricalPictureRocks = lazy(() => import("@/pages/ElectricalPictureRocks"));
const ElectricalGladdenFarms = lazy(() => import("@/pages/ElectricalGladdenFarms"));
const ElectricalEastTucson = lazy(() => import("@/pages/ElectricalEastTucson"));
const ElectricalDrexelHeights = lazy(() => import("@/pages/ElectricalDrexelHeights"));
const ElectricalAvraValley = lazy(() => import("@/pages/ElectricalAvraValley"));
const ElectricalCoronadeTucson = lazy(() => import("@/pages/ElectricalCoronadeTucson"));
const ElectricalCortaro = lazy(() => import("@/pages/ElectricalCortaro"));
const RoofingOroValley = lazy(() => import("@/pages/RoofingOroValley"));
const RoofingMarana = lazy(() => import("@/pages/RoofingMarana"));
const RoofingGreenValley = lazy(() => import("@/pages/RoofingGreenValley"));
const RoofingSahuarita = lazy(() => import("@/pages/RoofingSahuarita"));
const RoofingVail = lazy(() => import("@/pages/RoofingVail"));
const RoofingCasasAdobes = lazy(() => import("@/pages/RoofingCasasAdobes"));
const RoofingTucson = lazy(() => import("@/pages/RoofingTucson"));
const RoofingTucsonEstates = lazy(() => import("@/pages/RoofingTucsonEstates"));
const RoofingTortolita = lazy(() => import("@/pages/RoofingTortolita"));
const RoofingTanqueVerde = lazy(() => import("@/pages/RoofingTanqueVerde"));
const RoofingSaddleBrooke = lazy(() => import("@/pages/RoofingSaddleBrooke"));
const RoofingRitaRanch = lazy(() => import("@/pages/RoofingRitaRanch"));
const RoofingRillito = lazy(() => import("@/pages/RoofingRillito"));
const RoofingPictureRocks = lazy(() => import("@/pages/RoofingPictureRocks"));
const RoofingGladdenFarms = lazy(() => import("@/pages/RoofingGladdenFarms"));
const RoofingEastTucson = lazy(() => import("@/pages/RoofingEastTucson"));
const RoofingDrexelHeights = lazy(() => import("@/pages/RoofingDrexelHeights"));
const RoofingAvraValley = lazy(() => import("@/pages/RoofingAvraValley"));
const RoofingCoronadeTucson = lazy(() => import("@/pages/RoofingCoronadeTucson"));
const RoofingCortaro = lazy(() => import("@/pages/RoofingCortaro"));
const HVACOroValley = lazy(() => import("@/pages/HVACOroValley"));
const HVACMarana = lazy(() => import("@/pages/HVACMarana"));
const HVACGreenValley = lazy(() => import("@/pages/HVACGreenValley"));
const HVACSahuarita = lazy(() => import("@/pages/HVACSahuarita"));
const HVACVail = lazy(() => import("@/pages/HVACVail"));
const HVACCasasAdobes = lazy(() => import("@/pages/HVACCasasAdobes"));
const HVACTucson = lazy(() => import("@/pages/HVACTucson"));
const HVACTucsonEstates = lazy(() => import("@/pages/HVACTucsonEstates"));
const HVACTortolita = lazy(() => import("@/pages/HVACTortolita"));
const HVACTanqueVerde = lazy(() => import("@/pages/HVACTanqueVerde"));
const HVACSaddleBrooke = lazy(() => import("@/pages/HVACSaddleBrooke"));
const HVACRitaRanch = lazy(() => import("@/pages/HVACRitaRanch"));
const HVACRillito = lazy(() => import("@/pages/HVACRillito"));
const HVACPictureRocks = lazy(() => import("@/pages/HVACPictureRocks"));
const HVACGladdenFarms = lazy(() => import("@/pages/HVACGladdenFarms"));
const HVACEastTucson = lazy(() => import("@/pages/HVACEastTucson"));
const HVACDrexelHeights = lazy(() => import("@/pages/HVACDrexelHeights"));
const HVACAvraValley = lazy(() => import("@/pages/HVACAvraValley"));
const HVACCoronadeTucson = lazy(() => import("@/pages/HVACCoronadeTucson"));
const HVACCortaro = lazy(() => import("@/pages/HVACCortaro"));
const HeatingOroValley = lazy(() => import("@/pages/HeatingOroValley"));
const HeatingMarana = lazy(() => import("@/pages/HeatingMarana"));
const HeatingGreenValley = lazy(() => import("@/pages/HeatingGreenValley"));
const HeatingSahuarita = lazy(() => import("@/pages/HeatingSahuarita"));
const HeatingVail = lazy(() => import("@/pages/HeatingVail"));
const HeatingCasasAdobes = lazy(() => import("@/pages/HeatingCasasAdobes"));
const HeatingTucson = lazy(() => import("@/pages/HeatingTucson"));
const HeatingTucsonEstates = lazy(() => import("@/pages/HeatingTucsonEstates"));
const HeatingTortolita = lazy(() => import("@/pages/HeatingTortolita"));
const HeatingTanqueVerde = lazy(() => import("@/pages/HeatingTanqueVerde"));
const HeatingSaddleBrooke = lazy(() => import("@/pages/HeatingSaddleBrooke"));
const HeatingRitaRanch = lazy(() => import("@/pages/HeatingRitaRanch"));
const HeatingRillito = lazy(() => import("@/pages/HeatingRillito"));
const HeatingPictureRocks = lazy(() => import("@/pages/HeatingPictureRocks"));
const HeatingGladdenFarms = lazy(() => import("@/pages/HeatingGladdenFarms"));
const HeatingEastTucson = lazy(() => import("@/pages/HeatingEastTucson"));
const HeatingDrexelHeights = lazy(() => import("@/pages/HeatingDrexelHeights"));
const HeatingAvraValley = lazy(() => import("@/pages/HeatingAvraValley"));
const HeatingCoronadeTucson = lazy(() => import("@/pages/HeatingCoronadeTucson"));
const HeatingCortaro = lazy(() => import("@/pages/HeatingCortaro"));
const Resources = lazy(() => import("@/pages/Resources"));
const Contact = lazy(() => import("@/pages/Contact"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const BlogIndex = lazy(() => import("@/pages/BlogIndex"));
const BlogCategory = lazy(() => import("@/pages/BlogCategory"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  const [location] = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Suspense fallback={<PageLoadingFallback />}>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/about-intelligent-design" component={KnowledgeHub} />
      <Route path="/resources" component={Resources} />
      <Route path="/contact" component={Contact} />
      <Route path="/financing" component={Financing} />
      <Route path="/guarantees" component={Guarantees} />
      <Route path="/careers" component={Careers} />
      <Route path="/family-protection-plans" component={FamilyProtectionPlans} />
      <Route path="/customer-reviews" component={CustomerReviews} />
      <Route path="/video-testimonials" component={VideoTestimonials} />
      <Route path="/recent-projects" component={RecentProjects} />
      <Route path="/ac-repair-tucson" component={ACRepair} />
      <Route path="/ac-service-tucson" component={ACService} />
      <Route path="/ac-installation-tucson" component={ACInstallation} />
      <Route path="/ac-tuneup-tucson" component={ACTuneup} />
      <Route path="/ductless-repair-tucson" component={DuctlessMiniSplitRepair} />
      <Route path="/ductless-installation-tucson" component={DuctlessMiniSplitInstallation} />
      <Route path="/duct-cleaning-tucson" component={DuctCleaning} />
      <Route path="/duct-repair-tucson" component={DuctRepair} />
      <Route path="/duct-installation-tucson" component={DuctInstallation} />
      <Route path="/duct-sealing-tucson" component={DuctSealing} />
      <Route path="/smart-thermostat-installation-tucson" component={SmartThermostatInstallation} />
      <Route path="/indoor-air-quality-tucson" component={IndoorAirQuality} />
      <Route path="/solar-ac-tucson" component={SolarAC} />
      <Route path="/heater-repair-tucson" component={HeaterRepair} />
      <Route path="/heater-service-tucson" component={HeaterService} />
      <Route path="/heater-installation-tucson" component={HeaterInstallation} />
      <Route path="/heater-tuneup-tucson" component={HeaterTuneup} />
      <Route path="/heat-pumps-tucson" component={HeatPumps} />
      <Route path="/furnaces-tucson" component={Furnaces} />
      <Route path="/water-filtration-tucson" component={WaterFiltration} />
      <Route path="/hybrid-water-heaters-tucson" component={HybridWaterHeaters} />
      <Route path="/trenchless-repair-tucson" component={TrenchlessRepair} />
      <Route path="/rooter-services-tucson" component={RooterSpecial} />
      <Route path="/water-softeners-tucson" component={WaterSofteners} />
      <Route path="/water-heaters-tucson" component={WaterHeaters} />
      <Route path="/water-heater-repair-tucson" component={WaterHeaterRepair} />
      <Route path="/water-heater-installation-tucson" component={WaterHeaterInstallation} />
      <Route path="/water-heater-flush-tucson" component={WaterHeaterFlush} />
      <Route path="/plumbing-maintenance-tucson" component={PlumbingMaintenance} />
      <Route path="/drain-clearing-tucson" component={DrainClearing} />
      <Route path="/leak-detection-tucson" component={LeakDetection} />
      <Route path="/water-leak-repair-tucson" component={WaterLeakRepair} />
      <Route path="/sewer-line-repair-tucson" component={SewerLineRepair} />
      <Route path="/sewer-camera-inspection-tucson" component={SewerCameraInspection} />
      <Route path="/sink-repair-installation-tucson" component={SinkRepairInstallation} />
      <Route path="/bidet-installation-tucson" component={BidetInstallation} />
      <Route path="/garbage-disposal-installation-tucson" component={GarbageDisposal} />
      <Route path="/toilet-installation-tucson" component={ToiletInstallation} />
      <Route path="/residential-roof-repair-tucson" component={ResidentialRoofRepair} />
      <Route path="/residential-roof-installation-tucson" component={ResidentialRoofInstallation} />
      <Route path="/residential-roof-replacement-tucson" component={ResidentialRoofReplacement} />
      <Route path="/residential-roof-coating-tucson" component={ResidentialRoofCoating} />
      <Route path="/residential-roof-inspection-tucson" component={ResidentialRoofInspection} />
      <Route path="/commercial-roof-repair-tucson" component={CommercialRoofRepair} />
      <Route path="/commercial-roof-installation-tucson" component={CommercialRoofInstallation} />
      <Route path="/commercial-roof-replacement-tucson" component={CommercialRoofReplacement} />
      <Route path="/commercial-roof-coating-tucson" component={CommercialRoofCoating} />
      <Route path="/commercial-roof-inspection-tucson" component={CommercialRoofInspection} />
      <Route path="/solar-tubular-lights-tucson" component={SolarTubularLights} />
      <Route path="/skylights-tucson" component={Skylights} />
      <Route path="/flat-roof-repair-tucson" component={FlatRoofs} />
      <Route path="/shingle-roofs-tucson" component={ShingleRoofs} />
      <Route path="/tile-roofing-tucson" component={TileRoofs} />
      <Route path="/pitched-roofs-tucson" component={PitchedRoofs} />
      <Route path="/metal-roofing-tucson" component={MetalRoofs} />
      <Route path="/residential-solar-installation-tucson" component={ResidentialSolarInstallation} />
      <Route path="/commercial-solar-installation-tucson" component={CommercialSolarInstallation} />
      <Route path="/solar-maintenance-tucson" component={SolarMaintenance} />
      <Route path="/home-energy-audit-tucson" component={HomeEnergyAudit} />
      <Route path="/solar-tax-credits-tucson" component={SolarTaxCredits} />
      <Route path="/solar-panel-costs-tucson" component={SolarPanelCosts} />
      <Route path="/electrical-repair-tucson" component={ElectricalRepair} />
      <Route path="/generac-installation-tucson" component={GeneracInstallation} />
      <Route path="/generac-repair-tucson" component={GeneracRepair} />
      <Route path="/electrical-panel-upgrades-tucson" component={ElectricalPanelUpgrades} />
      <Route path="/home-energy-upgrades-tucson" component={HomeEnergyUpgrades} />
      <Route path="/ceiling-fan-installation-tucson" component={CeilingFanInstallation} />
      <Route path="/outdoor-motion-lighting-tucson" component={OutdoorMotionLighting} />
      <Route path="/lighting-upgrades-tucson" component={LightingUpgrades} />
      <Route path="/circuit-breakers-tucson" component={CircuitBreakers} />
      <Route path="/outlets-switches-tucson" component={OutletsSwitches} />
      {/* Pearl Certification pages - DRAFT (no longer certified) */}
      {/* <Route path="/pearl-certified-contractor" component={PearlCertifiedContractor} /> */}
      {/* <Route path="/pearl-certified-solar" component={PearlCertifiedSolar} /> */}
      {/* <Route path="/pearl-certified-hvac" component={PearlCertifiedHVAC} /> */}
      <Route path="/new-homebuyer-offer" component={NewHomebuyerOffer} />
      <Route path="/realtors-offer" component={RealtorsOffer} />
      <Route path="/why-tucson-chooses-intelligent-design" component={WhyTucsonChoosesIntelligentDesign} />
      <Route path="/areas-served" component={AreasWeServe} />
      <Route path="/tucson" component={Tucson} />
      <Route path="/oro-valley" component={OroValley} />
      <Route path="/marana" component={Marana} />
      <Route path="/sahuarita" component={Sahuarita} />
      <Route path="/green-valley" component={GreenValley} />
      <Route path="/vail" component={Vail} />
      <Route path="/corona-de-tucson" component={CoronaDeTucson} />
      <Route path="/drexel-heights" component={DrexelHeights} />
      <Route path="/casas-adobes" component={CasasAdobes} />
      <Route path="/tucson-estates" component={TucsonEstates} />
      <Route path="/tortolita" component={Tortolita} />
      <Route path="/picture-rocks" component={PictureRocks} />
      <Route path="/rillito" component={Rillito} />
      <Route path="/cortaro" component={Cortaro} />
      <Route path="/avra-valley" component={AvraValley} />
      <Route path="/east-tucson" component={EastTucson} />
      <Route path="/catalina-foothills" component={CatalinaFoothills} />
      <Route path="/tanque-verde" component={TanqueVerde} />
      <Route path="/rita-ranch" component={RitaRanch} />
      <Route path="/gladden-farms" component={GladdenFarms} />
      <Route path="/saddlebrooke-catalina" component={SaddleBrooke} />
      {/* Solar Installation + Location Pages */}
      <Route path="/solar-installation-oro-valley" component={SolarInstallationOroValley} />
      <Route path="/solar-installation-marana" component={SolarInstallationMarana} />
      <Route path="/solar-installation-green-valley" component={SolarInstallationGreenValley} />
      <Route path="/solar-installation-sahuarita" component={SolarInstallationSahuarita} />
      <Route path="/solar-installation-vail" component={SolarInstallationVail} />
      <Route path="/solar-installation-casas-adobes" component={SolarInstallationCasasAdobes} />
      <Route path="/solar-installation-tucson" component={SolarInstallationTucson} />
      <Route path="/solar-installation-tucson-estates" component={SolarInstallationTucsonEstates} />
      <Route path="/solar-installation-tortolita" component={SolarInstallationTortolita} />
      <Route path="/solar-installation-tanque-verde" component={SolarInstallationTanqueVerde} />
      <Route path="/solar-installation-saddlebrooke-catalina" component={SolarInstallationSaddleBrooke} />
      <Route path="/solar-installation-rita-ranch" component={SolarInstallationRitaRanch} />
      <Route path="/solar-installation-rillito" component={SolarInstallationRillito} />
      <Route path="/solar-installation-picture-rocks" component={SolarInstallationPictureRocks} />
      <Route path="/solar-installation-gladden-farms" component={SolarInstallationGladdenFarms} />
      <Route path="/solar-installation-east-tucson" component={SolarInstallationEastTucson} />
      <Route path="/solar-installation-drexel-heights" component={SolarInstallationDrexelHeights} />
      <Route path="/solar-installation-avra-valley" component={SolarInstallationAvraValley} />
      <Route path="/solar-installation-corona-de-tucson" component={SolarInstallationCoronadeTucson} />
      <Route path="/solar-installation-cortaro" component={SolarInstallationCortaro} />
      {/* Plumbing + Location Pages */}
      <Route path="/plumbing-oro-valley" component={PlumbingOroValley} />
      <Route path="/plumbing-marana" component={PlumbingMarana} />
      <Route path="/plumbing-green-valley" component={PlumbingGreenValley} />
      <Route path="/plumbing-sahuarita" component={PlumbingSahuarita} />
      <Route path="/plumbing-vail" component={PlumbingVail} />
      <Route path="/plumbing-casas-adobes" component={PlumbingCasasAdobes} />
      <Route path="/plumbing-tucson" component={PlumbingTucson} />
      <Route path="/plumbing-tucson-estates" component={PlumbingTucsonEstates} />
      <Route path="/plumbing-tortolita" component={PlumbingTortolita} />
      <Route path="/plumbing-tanque-verde" component={PlumbingTanqueVerde} />
      <Route path="/plumbing-saddlebrooke-catalina" component={PlumbingSaddleBrooke} />
      <Route path="/plumbing-rita-ranch" component={PlumbingRitaRanch} />
      <Route path="/plumbing-rillito" component={PlumbingRillito} />
      <Route path="/plumbing-picture-rocks" component={PlumbingPictureRocks} />
      <Route path="/plumbing-gladden-farms" component={PlumbingGladdenFarms} />
      <Route path="/plumbing-east-tucson" component={PlumbingEastTucson} />
      <Route path="/plumbing-drexel-heights" component={PlumbingDrexelHeights} />
      <Route path="/plumbing-avra-valley" component={PlumbingAvraValley} />
      <Route path="/plumbing-corona-de-tucson" component={PlumbingCoronadeTucson} />
      <Route path="/plumbing-cortaro" component={PlumbingCortaro} />
      {/* Electrical + Location Pages */}
      <Route path="/electrical-oro-valley" component={ElectricalOroValley} />
      <Route path="/electrical-marana" component={ElectricalMarana} />
      <Route path="/electrical-green-valley" component={ElectricalGreenValley} />
      <Route path="/electrical-sahuarita" component={ElectricalSahuarita} />
      <Route path="/electrical-vail" component={ElectricalVail} />
      <Route path="/electrical-casas-adobes" component={ElectricalCasasAdobes} />
      <Route path="/electrical-tucson" component={ElectricalTucson} />
      <Route path="/electrical-tucson-estates" component={ElectricalTucsonEstates} />
      <Route path="/electrical-tortolita" component={ElectricalTortolita} />
      <Route path="/electrical-tanque-verde" component={ElectricalTanqueVerde} />
      <Route path="/electrical-saddlebrooke-catalina" component={ElectricalSaddleBrooke} />
      <Route path="/electrical-rita-ranch" component={ElectricalRitaRanch} />
      <Route path="/electrical-rillito" component={ElectricalRillito} />
      <Route path="/electrical-picture-rocks" component={ElectricalPictureRocks} />
      <Route path="/electrical-gladden-farms" component={ElectricalGladdenFarms} />
      <Route path="/electrical-east-tucson" component={ElectricalEastTucson} />
      <Route path="/electrical-drexel-heights" component={ElectricalDrexelHeights} />
      <Route path="/electrical-avra-valley" component={ElectricalAvraValley} />
      <Route path="/electrical-corona-de-tucson" component={ElectricalCoronadeTucson} />
      <Route path="/electrical-cortaro" component={ElectricalCortaro} />
      {/* Roofing + Location Pages */}
      <Route path="/roofing-oro-valley" component={RoofingOroValley} />
      <Route path="/roofing-marana" component={RoofingMarana} />
      <Route path="/roofing-green-valley" component={RoofingGreenValley} />
      <Route path="/roofing-sahuarita" component={RoofingSahuarita} />
      <Route path="/roofing-vail" component={RoofingVail} />
      <Route path="/roofing-casas-adobes" component={RoofingCasasAdobes} />
      <Route path="/roofing-tucson" component={RoofingTucson} />
      <Route path="/roofing-tucson-estates" component={RoofingTucsonEstates} />
      <Route path="/roofing-tortolita" component={RoofingTortolita} />
      <Route path="/roofing-tanque-verde" component={RoofingTanqueVerde} />
      <Route path="/roofing-saddlebrooke-catalina" component={RoofingSaddleBrooke} />
      <Route path="/roofing-rita-ranch" component={RoofingRitaRanch} />
      <Route path="/roofing-rillito" component={RoofingRillito} />
      <Route path="/roofing-picture-rocks" component={RoofingPictureRocks} />
      <Route path="/roofing-gladden-farms" component={RoofingGladdenFarms} />
      <Route path="/roofing-east-tucson" component={RoofingEastTucson} />
      <Route path="/roofing-drexel-heights" component={RoofingDrexelHeights} />
      <Route path="/roofing-avra-valley" component={RoofingAvraValley} />
      <Route path="/roofing-corona-de-tucson" component={RoofingCoronadeTucson} />
      <Route path="/roofing-cortaro" component={RoofingCortaro} />
      {/* HVAC + Location Pages */}
      <Route path="/hvac-oro-valley" component={HVACOroValley} />
      <Route path="/hvac-marana" component={HVACMarana} />
      <Route path="/hvac-green-valley" component={HVACGreenValley} />
      <Route path="/hvac-sahuarita" component={HVACSahuarita} />
      <Route path="/hvac-vail" component={HVACVail} />
      <Route path="/hvac-casas-adobes" component={HVACCasasAdobes} />
      <Route path="/hvac-tucson" component={HVACTucson} />
      <Route path="/hvac-tucson-estates" component={HVACTucsonEstates} />
      <Route path="/hvac-tortolita" component={HVACTortolita} />
      <Route path="/hvac-tanque-verde" component={HVACTanqueVerde} />
      <Route path="/hvac-saddlebrooke-catalina" component={HVACSaddleBrooke} />
      <Route path="/hvac-rita-ranch" component={HVACRitaRanch} />
      <Route path="/hvac-rillito" component={HVACRillito} />
      <Route path="/hvac-picture-rocks" component={HVACPictureRocks} />
      <Route path="/hvac-gladden-farms" component={HVACGladdenFarms} />
      <Route path="/hvac-east-tucson" component={HVACEastTucson} />
      <Route path="/hvac-drexel-heights" component={HVACDrexelHeights} />
      <Route path="/hvac-avra-valley" component={HVACAvraValley} />
      <Route path="/hvac-corona-de-tucson" component={HVACCoronadeTucson} />
      <Route path="/hvac-cortaro" component={HVACCortaro} />
      {/* Heating + Location Pages */}
      <Route path="/heating-oro-valley" component={HeatingOroValley} />
      <Route path="/heating-marana" component={HeatingMarana} />
      <Route path="/heating-green-valley" component={HeatingGreenValley} />
      <Route path="/heating-sahuarita" component={HeatingSahuarita} />
      <Route path="/heating-vail" component={HeatingVail} />
      <Route path="/heating-casas-adobes" component={HeatingCasasAdobes} />
      <Route path="/heating-tucson" component={HeatingTucson} />
      <Route path="/heating-tucson-estates" component={HeatingTucsonEstates} />
      <Route path="/heating-tortolita" component={HeatingTortolita} />
      <Route path="/heating-tanque-verde" component={HeatingTanqueVerde} />
      <Route path="/heating-saddlebrooke-catalina" component={HeatingSaddleBrooke} />
      <Route path="/heating-rita-ranch" component={HeatingRitaRanch} />
      <Route path="/heating-rillito" component={HeatingRillito} />
      <Route path="/heating-picture-rocks" component={HeatingPictureRocks} />
      <Route path="/heating-gladden-farms" component={HeatingGladdenFarms} />
      <Route path="/heating-east-tucson" component={HeatingEastTucson} />
      <Route path="/heating-drexel-heights" component={HeatingDrexelHeights} />
      <Route path="/heating-avra-valley" component={HeatingAvraValley} />
      <Route path="/heating-corona-de-tucson" component={HeatingCoronadeTucson} />
      <Route path="/heating-cortaro" component={HeatingCortaro} />
      {/* Legal Pages */}
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      {/* Blog Routes */}
      <Route path="/blog" component={BlogIndex} />
      <Route path="/blog/category/:categorySlug" component={BlogCategory} />
      <Route path="/blog/:category/:slug" component={BlogPost} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
    </Suspense>
  );
}


function App() {
  return (
    <HelmetProvider>
      <Schema />
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <SkipToContent />
          <Toaster />
          <CookieConsent />
          <AccessibilityToggle />
          <main id="main-content">
            <Router />
          </main>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
