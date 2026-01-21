"use client";
import React from 'react';
import type { User } from './types';
import { LayoutDashboard, Settings, User as UserIcon, LogOut, Bell, Search, Plus, TrendingUp, Activity, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

interface DashboardProps {
    user: User;
    onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
    return (
        <div className="w-full h-full flex overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700 bg-black/20">
            {/* Sidebar */}
            <aside className="w-20 md:w-64 border-r border-white/5 flex flex-col items-center py-8 bg-white/[0.02] backdrop-blur-sm">
                {/* Logo */}
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl mb-12 flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <LayoutDashboard className="text-white" size={24} />
                </div>

                {/* Navigation */}
                <nav className="flex-1 w-full space-y-2 px-4">
                    <SidebarButton icon={<LayoutDashboard size={20} />} label="Overview" active />
                    <SidebarButton icon={<Bell size={20} />} label="Notifications" badge="3" />
                    <SidebarButton icon={<Search size={20} />} label="Discovery" />
                    <SidebarButton icon={<UserIcon size={20} />} label="Account" />
                    <SidebarButton icon={<Settings size={20} />} label="Settings" />
                </nav>

                <Separator className="my-4 bg-white/5" />

                {/* Logout Button */}
                <Button
                    onClick={onLogout}
                    variant="ghost"
                    className="w-10 md:w-[80%] flex items-center justify-center md:justify-start gap-3 text-red-400 hover:bg-red-500/10 hover:text-red-400"
                >
                    <LogOut size={20} />
                    <span className="hidden md:block font-medium">Logout</span>
                </Button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden">
                {/* Top Header */}
                <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-white/[0.01]">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12 border-2 border-blue-500/30 shadow-lg">
                            <AvatarFallback className="bg-gradient-to-br from-blue-600 to-blue-500 text-white font-bold text-lg">
                                {user.name.charAt(0).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <h2 className="text-white font-bold text-xl tracking-tight leading-none">Welcome, {user.name}</h2>
                            <p className="text-gray-500 text-[11px] mt-1 uppercase tracking-tighter">
                                {new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' })}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center relative">
                            <Search className="absolute left-3 text-gray-500" size={16} />
                            <Input
                                type="text"
                                placeholder="Search insights..."
                                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 pl-10 pr-4 h-10 w-48 rounded-full focus-visible:ring-blue-500/50"
                            />
                        </div>
                        <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all">
                            <Plus size={16} />
                            <span className="hidden sm:inline">New Task</span>
                        </Button>
                    </div>
                </header>

                {/* Content Area */}
                <ScrollArea className="flex-1 p-6 md:p-8">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <StatsCard
                            title="Current Revenue"
                            value="$48,920.00"
                            trend="+8.2%"
                            icon={<TrendingUp size={20} />}
                            color="emerald"
                        />
                        <StatsCard
                            title="Team Velocity"
                            value="84%"
                            trend="+4.1%"
                            icon={<Activity size={20} />}
                            color="blue"
                        />
                        <StatsCard
                            title="System Health"
                            value="Stable"
                            trend="Normal"
                            icon={<Database size={20} />}
                            color="purple"
                        />
                    </div>

                    {/* Activity & Tools Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Activity Log */}
                        <Card className="glass-card border-white/5 bg-white/[0.01]">
                            <CardHeader className="flex flex-row items-center justify-between pb-4">
                                <CardTitle className="text-white text-base font-bold">Activity Log</CardTitle>
                                <Button variant="link" size="sm" className="text-blue-400 text-xs uppercase tracking-wider hover:text-blue-300">
                                    View All
                                </Button>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ActivityItem
                                    title="Deployment: Edge-01"
                                    time="2h ago"
                                    description="Successfully deployed v2.4.0 to Tokyo-01 cluster."
                                    status="success"
                                />
                                <ActivityItem
                                    title="Security Alert"
                                    time="5h ago"
                                    description="Unusual login attempt blocked from 192.168.1.1."
                                    status="warning"
                                />
                                <ActivityItem
                                    title="Sync Complete"
                                    time="1d ago"
                                    description="Database synchronization with backup node finished."
                                    status="info"
                                />
                            </CardContent>
                        </Card>

                        {/* Dashboard Tools */}
                        <Card className="glass-card border-white/5 bg-white/[0.01]">
                            <CardHeader className="pb-4">
                                <CardTitle className="text-white text-base font-bold">Dashboard Tools</CardTitle>
                                <CardDescription className="text-gray-400 text-xs">Quick access to your tools</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 gap-4">
                                    <QuickActionCard icon={<LayoutDashboard size={20} />} label="Metrics" color="purple" />
                                    <QuickActionCard icon={<UserIcon size={20} />} label="Directory" color="emerald" />
                                    <QuickActionCard icon={<Bell size={20} />} label="Incidents" color="orange" />
                                    <QuickActionCard icon={<Settings size={20} />} label="Auth API" color="blue" />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </ScrollArea>
            </main>
        </div>
    );
};

// Sidebar Button Component
const SidebarButton = ({ icon, label, active = false, badge }: { icon: React.ReactNode, label: string, active?: boolean, badge?: string }) => (
    <Button
        variant={active ? "secondary" : "ghost"}
        className={`w-full justify-center md:justify-start gap-3 ${active
            ? 'bg-white/10 text-white shadow-sm hover:bg-white/15'
            : 'text-gray-500 hover:text-white hover:bg-white/5'
            }`}
    >
        <div className="relative">
            {icon}
            {badge && (
                <Badge className="absolute -top-2 -right-2 h-4 w-4 p-0 flex items-center justify-center text-[9px] bg-red-500 border-0">
                    {badge}
                </Badge>
            )}
        </div>
        <span className="hidden md:block font-medium text-sm tracking-tight">{label}</span>
    </Button>
);

// Stats Card Component
const StatsCard = ({ title, value, trend, icon, color }: {
    title: string,
    value: string,
    trend: string,
    icon: React.ReactNode,
    color: 'emerald' | 'blue' | 'purple' | 'orange'
}) => {
    const colorClasses = {
        emerald: 'text-emerald-400 bg-emerald-500/10',
        blue: 'text-blue-400 bg-blue-500/10',
        purple: 'text-purple-400 bg-purple-500/10',
        orange: 'text-orange-400 bg-orange-500/10',
    };

    return (
        <Card className="glass-card border-white/5 bg-white/[0.01] transition-all hover:scale-[1.02] hover:border-white/10">
            <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                    <div className={`p-2.5 rounded-xl ${colorClasses[color]}`}>
                        {icon}
                    </div>
                    <Badge variant="secondary" className={`${colorClasses[color]} text-[10px] font-bold border-0`}>
                        {trend}
                    </Badge>
                </div>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-1">{title}</p>
                <h4 className="text-white text-2xl font-bold tracking-tight">{value}</h4>
            </CardContent>
        </Card>
    );
};

// Activity Item Component
const ActivityItem = ({ title, time, description, status }: {
    title: string,
    time: string,
    description: string,
    status: 'success' | 'warning' | 'info'
}) => {
    const statusColors = {
        success: 'bg-emerald-500',
        warning: 'bg-orange-500',
        info: 'bg-blue-500',
    };

    return (
        <div className="flex gap-4 group">
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                <div className={`w-2 h-2 rounded-full ${statusColors[status]}`} />
            </div>
            <div className="flex-1 border-b border-white/5 pb-4 group-last:border-0">
                <div className="flex justify-between items-start mb-1">
                    <h5 className="text-white text-sm font-semibold tracking-tight">{title}</h5>
                    <Badge variant="outline" className="text-gray-500 text-[9px] uppercase border-white/10 bg-transparent">
                        {time}
                    </Badge>
                </div>
                <p className="text-gray-500 text-xs line-clamp-2">{description}</p>
            </div>
        </div>
    );
};

// Quick Action Card Component
const QuickActionCard = ({ icon, label, color }: {
    icon: React.ReactNode,
    label: string,
    color: 'purple' | 'emerald' | 'orange' | 'blue'
}) => {
    const colorClasses = {
        purple: 'bg-purple-500/20 text-purple-400 hover:bg-purple-500/30',
        emerald: 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30',
        orange: 'bg-orange-500/20 text-orange-400 hover:bg-orange-500/30',
        blue: 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30',
    };

    return (
        <Button
            variant="outline"
            className={`flex flex-col items-center justify-center h-24 rounded-xl bg-white/5 border-white/5 hover:border-white/10 transition-all gap-3 active:scale-95 ${colorClasses[color]}`}
        >
            <div className="p-2 rounded-lg">
                {icon}
            </div>
            <span className="text-white text-[10px] font-bold uppercase tracking-wider">{label}</span>
        </Button>
    );
};

export default Dashboard;
