export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Head Office */}
          <FooterCard title="Head Office">
            <p className="font-semibold">SKY COMPUTER EDUCATION</p>
            <p className="text-sm mt-2">
              East of Naka No. 5, Near Panchmukhi Hanuman Mandir, Mishratola,
              Darbhanga, Bihar – 846009
            </p>
            <p className="mt-3 text-sm">
              📞 9128414128
              <br />
              📞 7070985222
            </p>
          </FooterCard>

          {/* Dhoighat Branch */}
          <FooterCard title="Sub Branch">
            <p className="font-semibold">YOUR COMPUTER EDUCATION</p>
            <p className="text-sm mt-2">
              Near R. B. Petrol Pump,
              <br />
              Dhoighat, Darbhanga – 846009
            </p>
            <p className="mt-3 text-sm">📞 1542147813</p>
          </FooterCard>

          {/* Laheriasarai Branch */}
          <FooterCard title="Sub Branch">
            <p className="font-semibold">YOUR COMPUTER EDUCATION</p>
            <p className="text-sm mt-2">
              VIP Road, Near SBI Bank,
              <br />
              Above Preetum Studio,
              <br />
              Darbhanga – 846001
            </p>
            <p className="mt-3 text-sm">📞 1234567890</p>
          </FooterCard>

          {/* Map Placeholder */}
          <FooterCard title="Location Map">
            <div className="h-full flex items-center justify-center border border-dashed border-gray-500 rounded text-gray-300">
              <span className="text-sm">Google Map will be loaded here</span>
            </div>
          </FooterCard>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} YOUR COMPUTER EDUCATION. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

/* 🔹 Reusable Card */
function FooterCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#020617] p-6 rounded-lg shadow-md h-full">
      <h3 className="text-lg font-semibold mb-3 text-blue-400">{title}</h3>
      {children}
    </div>
  );
}
