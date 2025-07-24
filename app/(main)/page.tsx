import ResponsiveContainer from "@/components/ResponsiveContainer";

export default function Home() {
  return (
    // responsive container ini adalah komponen kontainer yang udah responsive dan tinggal pakke
    <ResponsiveContainer className="mt-30">
      {/* ini pecah aja kedalam komponen hero ya */}

      <h1>Hero Section</h1>
    </ResponsiveContainer>
  );
}
