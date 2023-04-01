// Adaptee
class VGAConnector {
  public connectToMonitor(): void {
    console.log("Connecting to monitor using VGA...");
  }
}

// Target interface
interface USBConnector {
  connectToLaptop(): void;
}

// Adapter
class VGAtoUSBAdapter implements USBConnector {
  private vgaConnector: VGAConnector;

  constructor(vgaConnector: VGAConnector) {
    this.vgaConnector = vgaConnector;
  }

  public connectToLaptop(): void {
    console.log("Converting VGA signal to USB-C...");
    this.vgaConnector.connectToMonitor();
  }
}

// Client
class Laptop {
  public connectToMonitor(connector: USBConnector): void {
    connector.connectToLaptop();
  }
}

// Usage
const vgaConnector = new VGAConnector();
const adapter = new VGAtoUSBAdapter(vgaConnector);
const laptop = new Laptop();

laptop.connectToMonitor(adapter);
