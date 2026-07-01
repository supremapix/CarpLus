import { Zap, Wrench, Wind, Truck, Trophy, Thermometer, Target, Star, Square, Snowflake, SlidersHorizontal, Sliders, ShoppingCart, ShoppingBag, ShieldCheck, ShieldAlert, Settings, RotateCw, RefreshCw, MoveVertical, Monitor, Maximize2, Link, Layers, GitBranch, Gauge, FlaskConical, Filter, Droplets, Droplet, Disc, CreditCard, Cpu, Clock, Clipboard, Circle, CheckCircle, Battery, Award, AlignCenter } from "lucide-react";
const iconMap = {
  AlignCenter,
  Award,
  Battery,
  CheckCircle,
  Circle,
  Clipboard,
  Clock,
  Cpu,
  CreditCard,
  Disc,
  Droplet,
  Droplets,
  Filter,
  FlaskConical,
  Gauge,
  GitBranch,
  Layers,
  Link,
  Maximize2,
  Monitor,
  MoveVertical,
  RefreshCw,
  RotateCw,
  Settings,
  ShieldAlert,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sliders,
  SlidersHorizontal,
  Snowflake,
  Square,
  Star,
  Target,
  Thermometer,
  Trophy,
  Truck,
  Wind,
  Wrench,
  Zap
};
function getIcon(name) {
  return iconMap[name] || Circle;
}
export {
  getIcon as g
};
