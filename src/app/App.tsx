import { useState } from "react";
import {
  Menu,
  X,
  LayoutDashboard,
  Wallet,
  Receipt,
  Settings,
  TrendingUp,
  TrendingDown,
  LogOut,
} from "lucide-react";
import LoginPage from "./LoginPage";

type User = { name: string; email: string; initials: string };

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const transactions = [
    {
      id: 1,
      description: "Transaction Refund",
      amount: 900.0,
      date: "Apr 8, 2026",
      type: "credit",
    },
    {
      id: 2,
      description: "Transaction Refund",
      amount: 1800.0,
      date: "Apr 7, 2026",
      type: "credit",
    },
    {
      id: 3,
      description: "Transaction Refund",
      amount: 1450.0,
      date: "Apr 6, 2026",
      type: "credit",
    },
    {
      id: 4,
      description: "Transaction Refund",
      amount: 1500.0,
      date: "Apr 5, 2026",
      type: "credit",
    },
    {
      id: 5,
      description: "Transaction Refund",
      amount: 600.0,
      date: "Apr 4, 2026",
      type: "credit",
    },
    {
      id: 6,
      description: "Transaction Refund",
      amount: 1500.0,
      date: "Apr 3, 2026",
      type: "credit",
    },
  ];

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: Wallet, label: "Accounts", active: false },
    { icon: Receipt, label: "Transactions", active: false },
    { icon: Settings, label: "Settings", active: false },
  ];

  if (!user) {
    return <LoginPage onLogin={setUser} />;
  }

  const firstName = user.name.split(" ")[0];

  return (
    <div className="size-full flex bg-slate-50">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 lg:translate-x-0 lg:static ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="h-full flex flex-col">
          <div className="h-16 flex items-center justify-between px-6 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-semibold text-sm">
                R
              </div>
              <span className="font-semibold text-slate-900">
                Recovery Trustbank
              </span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-slate-500 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-1">
            {navItems.map((item, index) => (
              <button
                key={index}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${item.active ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-slate-200">
            <div className="flex items-center gap-3 px-2">
              <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-medium">
                {user.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-slate-900 truncate">
                  {user.name}
                </div>
                <div className="text-xs text-slate-500 truncate">
                  {user.email}
                </div>
              </div>
              <button
                onClick={() => setUser(null)}
                title="Logout"
                className="text-slate-400 hover:text-red-500 transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center px-4 lg:px-8">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden mr-4 text-slate-600 hover:text-slate-900"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold text-slate-900">
            Good morning {firstName}
          </h1>
        </header>

        <div className="flex-1 overflow-auto p-4 lg:p-8">
          <div className="max-w-6xl mx-auto space-y-8">
            <section>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-blue-100 text-sm mb-1">
                      Current Balance
                    </div>
                    <div className="text-5xl font-semibold">$9,900.00</div>
                  </div>
                  <Wallet className="w-12 h-12 text-blue-300 opacity-50" />
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-blue-500">
                  <div>
                    <div className="text-blue-100 text-xs mb-0.5">
                      Account Number
                    </div>
                    <div className="text-sm font-medium">
                      •••• •••• •••• 4829
                    </div>
                  </div>
                  <div className="h-8 w-px bg-blue-500" />
                  <div>
                    <div className="text-blue-100 text-xs mb-0.5">
                      Account Type
                    </div>
                    <div className="text-sm font-medium">Checking</div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-slate-900">
                  Recent Transactions
                </h2>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  View All
                </button>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-200">
                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${transaction.type === "credit" ? "bg-green-50 text-green-600" : "bg-slate-100 text-slate-600"}`}
                    >
                      {transaction.type === "credit" ? (
                        <TrendingUp className="w-5 h-5" />
                      ) : (
                        <TrendingDown className="w-5 h-5" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-slate-900 truncate">
                        {transaction.description}
                      </div>
                      <div className="text-sm text-slate-500">
                        {transaction.date}
                      </div>
                    </div>
                    <div
                      className={`font-semibold text-lg ${transaction.type === "credit" ? "text-green-600" : "text-slate-900"}`}
                    >
                      {transaction.type === "credit" ? "+" : ""}$
                      {Math.abs(transaction.amount).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
