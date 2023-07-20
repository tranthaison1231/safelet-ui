import { useEffect, useState } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { ReactComponent as ArrowUpIcon } from '@/assets/svgs/arrowup.svg'

interface IGuardianData {
  newUser: number
  title: string
  users: number
  percentage?: number
}
interface IPieChartData {
  cx: number
  cy: number
  midAngle: number
  innerRadius: number
  outerRadius: number
  percent: number
}
const GUARDIAN_DATA: IGuardianData[] = [
  {
    newUser: 378,
    title: '1 Guardian',
    users: 2774
  },
  {
    newUser: 86,
    title: '2 Guardian',
    users: 726
  },
  {
    newUser: 778,
    title: '3 Guardian',
    users: 3774
  },
  {
    newUser: 12,
    title: '3+ Guardian',
    users: 485
  }
]

function GuardianItem({ data, colors }: { data: IGuardianData; colors: Record<string, string> }) {
  return (
    <div className="flex items-center gap-1">
      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: colors[data.title] }} />
      <span className="text-sm font-medium whitespace-nowrap" style={{ color: colors[data.title] }}>
        {data.title}
      </span>
    </div>
  )
}
export default function GuardianChart() {
  const [caculateData, setCaculateData] = useState<IGuardianData[]>()
  const caculatePercent = () => {
    const totalUsers = GUARDIAN_DATA.reduce((sum, data) => sum + data.users, 0)
    const dataWithPercentage = GUARDIAN_DATA.map(data => ({
      ...data,
      percentage: Number(((data.users / totalUsers) * 100).toFixed(0))
    }))
    return dataWithPercentage.sort((a, b) => b.percentage - a.percentage)
  }
  useEffect(() => {
    setCaculateData(caculatePercent())
  }, [])

  const COLORS: Record<string, string> = {
    '1 Guardian': '#5858FA',
    '2 Guardian': '#FF4016',
    '3 Guardian': '#8E00B6',
    '3+ Guardian': '#737373'
  }
  const RADIAN = Math.PI / 180

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: IPieChartData) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)
    return (
      <text dominantBaseline="central" fill="white" textAnchor={x > cx ? 'start' : 'end'} x={x} y={y}>
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <div className="py-12 border-b border-red-300">
      <h2 className="mb-5 text-2xl font-medium">Guardian Wise pie chart</h2>
      <div className="flex gap-4">
        <div className="flex flex-col w-1/2 ">
          <div className="w-full h-[400px]">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  cx="50%"
                  cy="50%"
                  data={GUARDIAN_DATA}
                  dataKey="users"
                  fill="#8884d8"
                  label={renderCustomizedLabel}
                  labelLine={false}
                  outerRadius={170}
                >
                  {GUARDIAN_DATA.map((item, index) => (
                    <Cell fill={COLORS[item.title]} key={`cell-${index}`} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-4">
            {GUARDIAN_DATA.map(item => (
              <GuardianItem colors={COLORS} data={item} key={item.title} />
            ))}
          </div>
        </div>
        <div className="w-1/2 ">
          {caculateData
            ? caculateData.map(item => (
                <div
                  className="flex items-center justify-between w-full max-w-[700px] py-5 border-b border-gray-300"
                  key={item.title}
                >
                  <div className="flex flex-col gap-1">
                    <GuardianItem colors={COLORS} data={item} />
                    <div
                      className="flex items-center gap-1"
                      style={{
                        color: COLORS[item.title]
                      }}
                    >
                      <span className="text-4xl">{item.percentage?.toString().padStart(2, '0')}%</span>
                      <ArrowUpIcon />
                    </div>
                  </div>
                  <span className="font-medium">{item.newUser} New users</span>
                  <div className="flex flex-col leading-5">
                    <span className="text-sm opacity-60">Total</span>
                    <span className="font-medium">{item.users}</span>
                    <span className="text-sm opacity-60">users</span>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  )
}
