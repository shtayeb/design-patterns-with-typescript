interface ICommand {
  execute(): void;
  unExecute(): void;
}

class Light {
  state: boolean = false;

  on(): void {
    this.state = true;
  }

  off(): void {
    this.state = false;
  }
}

class LightOnCommand implements ICommand {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.on();
    console.log("Light: ", this.light.state);
  }

  unExecute(): void {
    this.light.off();
    console.log("Light: ", this.light.state);
  }
}

class LightOffCommand implements ICommand {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.off();
    console.log("Light: ", this.light.state);
  }

  unExecute(): void {
    this.light.on();
    console.log("Light: ", this.light.state);
  }
}

class RemoteControll {
  protected lightOn: ICommand;
  protected lightOff: ICommand;

  constructor(lightOn: ICommand, lightOff: ICommand) {
    this.lightOn = lightOn;
    this.lightOff = lightOff;
  }

  public pressOnButton(): void {
    this.lightOn.execute();
  }

  public pressOffButton(): void {
    this.lightOff.execute();
  }
}

// client
let lightOnCommand = new LightOnCommand(new Light());
let lightOffCommand = new LightOffCommand(new Light());

let remoteControll = new RemoteControll(lightOnCommand, lightOffCommand);

remoteControll.pressOnButton();
remoteControll.pressOffButton();
